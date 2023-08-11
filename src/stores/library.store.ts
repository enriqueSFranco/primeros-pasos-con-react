import { create } from 'zustand'
import type { Book, Library } from '@/shared/types.d'
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
    console.log('👉 findBook')
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
      const genres: Book['genre'][] = await getAllGenres({ library: books })
      set((state) => ({ ...state, genres }))
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
      console.log(typeFilter)
      // const filterInstance = new FilterBooks({ books: library })
      // filterInstance.filterBy(typeFilter)
    }
  }
}))
