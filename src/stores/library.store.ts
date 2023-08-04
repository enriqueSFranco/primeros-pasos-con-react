import { create } from 'zustand'
import type { Book, Library } from '@/shared/types.d'
import { FilterBooks } from '@/utilities/FilterBooks'
import data from '@/mocks/books.json'

interface LibraryState {
  library: Library
  filterInstance: FilterBooks
  findBook: ({ title }: { title: Book['title'] }) => void
  getGenres: () => Book['genre'][]
}

export const useLibrary = create<LibraryState>((set, get) => ({
  library: data,
  filterInstance: new FilterBooks({ books: data }),
  findBook: ({ title }: { title: Book['title'] }) => {
    const { filterInstance } = get()
    const matchBook = filterInstance.findBook({ title })
    set({ library: { library: matchBook } })
  },
  getGenres: (): Book['genre'][] => {
    const { filterInstance } = get()
    return filterInstance.getGenres()
  }
}))
