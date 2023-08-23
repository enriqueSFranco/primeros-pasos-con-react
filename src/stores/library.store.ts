import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Book, Library } from '@/shared/types.d'
import { BookLoadService } from '@/shared/interfaces.d'
import { getAllGenres } from '@/services'
import { FilterBooks } from '@/utilities'

interface LibraryState {
  library: Library
  loading: boolean
  genres: Book['genre'][] | []
  filteredBooks: Library
  readingList: Library,
  fetchLibrary: (bookLoader: BookLoadService) => void
  filterByTitle: ({ title }: { title: Book['title'] }) => void
  filterByGenre: (genre: string) => void
  addToReadingList: (book: Book) => void
  removeToReadingList: (book: Book) => void
}

export const useLibrary = create<LibraryState>()(
  persist(
    (set, get) => ({
      library: { library: [] },
      genres: [],
      loading: true,
      filteredBooks: { library: [] },
      readingList: { library: [] },
      filterByTitle: async ({ title }: { title: Book['title'] }) => {
        const { library } = get()
        const booksMatched = await FilterBooks.findBooksByTitle({ title, library })
        set({ filteredBooks: { library: booksMatched } })

      },
      filterByGenre: (genre: string) => {
        const { library } = get()
        const newFilterdBook = library.library.filter(({ book }) => book.genre === genre)
        set(state => ({ ...state, filteredBooks: { library: newFilterdBook } }))
      },
      fetchLibrary: async (bookLoader: BookLoadService) => {
        try {
          set(state => ({ ...state, loading: true }))

          const library = await bookLoader.loadingBooks()
          set(state => ({ ...state, library, loading: false }))

          const genres: Book['genre'][] = await getAllGenres(library)
          set(state => ({ ...state, genres }))

        } catch (error) {
          throw new Error('Opps, ha ocurrido un error durante la peticion')
        } finally {
          set(state => ({ ...state, loading: false }))
        }
      },
      addToReadingList: (book: Book) => {
        const { readingList } = get()
        const isInReadingList = readingList.library.some(bookList => bookList.book.title === book.title)

        if (!isInReadingList) {
          const newReadingList: Library = {
            library: [...readingList.library, { book }]
          }
          set(({ readingList: newReadingList }))
        }
      },
      removeToReadingList: (book: Book) => {
        set((state) => {
          const { readingList } = state
          const { library } = readingList

          const updatedReadingList = library.filter(bookList => bookList.book.title !== book.title)
          return { readingList: { library: updatedReadingList } }
        })
      }
    }),
    {
      name: 'library-storage'
    }
  )
)
