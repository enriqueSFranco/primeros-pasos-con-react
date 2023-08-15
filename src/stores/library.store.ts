import { create } from 'zustand'
import { GENRES, type Book, type Library } from '@/shared/types.d'
import { getAllGenres, loadingBooks } from '@/services'
import { FilterBooks } from '@/utilities'

interface LibraryState {
  library: Library
  loading: boolean
  genres: Book['genre'][] | []
  filteredBooks: Library
  readingList: Library,
  fetchLibrary: () => void
  findBook: ({ title }: { title: Book['title'] }) => void
  filterBy: ({ typeFilter }: { typeFilter: string }) => void
  addToReadingList: (book: Book) => boolean
}

export const useLibrary = create<LibraryState>((set, get) => ({
  library: { library: [] },
  genres: [],
  loading: true,
  filteredBooks: { library: [] },
  readingList: { library: [] },
  findBook: async ({ title }: { title: Book['title'] }) => {
    const { library } = get()
    const booksMatched = await FilterBooks.findBooksByTitle({ title, library })
    set({ filteredBooks: { library: booksMatched } })
  },
  fetchLibrary: async () => {
    try {
      set(state => ({ ...state, loading: true }))

      const library = await loadingBooks()
      set(state => ({ ...state, library, loading: false }))

      const genres: Book['genre'][] = await getAllGenres(library)
      set(state => ({ ...state, genres }))

    } catch (error) {
      throw new Error('Opps, ha ocurrido un error durante la peticion')
    } finally {
      set(state => ({ ...state, loading: false }))
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
  },
  addToReadingList: (book: Book): boolean => {
    const { readingList } = get()
    // TODO: IMPLEMENTAR LA ACCIÓN DE AGREGAR LIRBO A LA LISTA DE LECTURA

    const isBookAdded = readingList.library.some(({ book }) => book.title === book.title)

    if (!isBookAdded) {
      const readingListCopy: Library = {
        library: [{ book }, ...readingList.library]
      }
      set(state => ({ ...state, readingList: readingListCopy }))
      return true
    }
    return false
  }
}))
