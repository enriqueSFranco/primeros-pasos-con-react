import { create } from 'zustand'
import { GENRES, type Book, type Library } from '@/shared/types.d'
import { getAllGenres, loadingBooks } from '@/services'
import { FilterBooks } from '@/utilities'

interface LibraryState {
  library: Library
  loading: boolean
  genres: Book['genre'][] | []
  filteredBooks: Library
  loadingLibrary: () => void
  findBook: ({ title }: { title: Book['title'] }) => void
  loadingGenres: () => void
  filterBy: ({ typeFilter }: { typeFilter: string }) => void
}

export const useLibrary = create<LibraryState>((set, get) => ({
  library: { library: [] },
  genres: [],
  loading: true,
  filteredBooks: { library: [] },
  findBook: async ({ title }: { title: Book['title'] }) => {
    const { library } = get()
    const booksMatched = await FilterBooks.findBooksByTitle({ title, library })
    set({ filteredBooks: { library: booksMatched } })
  },
  loadingLibrary: async () => {
    try {
      const books: Library = await loadingBooks()
      set(state => ({ ...state, library: books, loading: true }))
    } catch (error) {
      throw new Error('')
    } finally {
      set(state => ({ ...state, loading: false }))
    }
  },
  loadingGenres: async () => {
    const { library } = get()
    const books = library.library
    try {
      if (library) {
        const genres: Book['genre'][] = await getAllGenres({ library: books })
        console.log(library)
        set((state) => ({ ...state, genres }))
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`)
      }
      return []
    }
  },
  filterBy: ({ typeFilter }: { typeFilter: string }) => {
    const { library } = get()
    if (library) {
      if (typeFilter === GENRES.TODOS) {
        set(state => ({ ...state, filteredBooks: library }))
      }
      // const filterInstance = new FilterBooks({ books: library })
      // filterInstance.filterBy(typeFilter)
    }
  }
}))
