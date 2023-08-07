import { create } from 'zustand'
import type { Book, Library as LibraryType } from '@/shared/types.d'
import { getAllGenres } from '@/services'
import { FilterBooks, Library } from '@/utilities'

interface LibraryState {
  library: LibraryType
  libraryInstance: Library
  genres: Book['genre'][] | []
  loading: boolean
  loadingBooks: () => void
  findBook: ({ title }: { title: Book['title'] }) => void
  getGenres: () => void
  filterBy: ({ typeFilter }: { typeFilter: string }) => void
}

export const useLibrary = create<LibraryState>((set, get) => ({
  library: { library: [] },
  libraryInstance: new Library({ library: [] }),
  genres: [],
  loading: true,
  loadingBooks: async () => {
    try {
      const { libraryInstance } = get()
      const books = await libraryInstance.loadingBooks()
      set((state) => ({ ...state, loading: true, library: books }))
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`)
      }
    } finally {
      set((state) => ({ ...state, loading: false }))
    }
  },
  findBook: async ({ title }: { title: Book['title'] }) => {
    // const { library } = get()
    // const filterInstance = new FilterBooks({ books: library })
    // const booksMatched = await filterInstance.findBooksByTitle({ title })
    // set({ library: { library: booksMatched } })
  },
  getGenres: async () => {
    try {
      const { libraryInstance } = get()
      const books: LibraryType = await libraryInstance.loadingBooks()
      const genres: Book['genre'][] = await getAllGenres({ library: books.library })
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
      const filterInstance = new FilterBooks({ books: library })
      filterInstance.filterBy(typeFilter)
    }
  }
}))
