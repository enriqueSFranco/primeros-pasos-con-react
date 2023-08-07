import { Book, LibraryElement, Library as LibraryType, GENRES } from '@/shared/types.d'
import { Library } from '@/utilities'

export class FilterBooks extends Library {
  constructor(books: LibraryType) {
    super(books)
  }

  async findBooksByTitle ({ title }: { title: Book['title'] }): Promise<LibraryElement[]> {
    try {
      const formattedTitle = title.trim().toLowerCase()
      if (!formattedTitle) {
        throw new Error('El título del libro no puede estar vacío.')
      }
      const { library } = this.books
      const bookMatches = library.filter(({ book }) => book.title.toLowerCase() === formattedTitle)

      return bookMatches
    } catch (error) {
      return []
    }
  }

  filterBy (typeFilter: string): LibraryType {
    if (typeFilter === GENRES.TODOS) {
      return this.books
    } else {
      // TODO: IMPLEMENTAR FILTROS
      console.log(`filtrar por: ${typeFilter}`)
    }
  }
}

/* 
  Las atributos privados no están disponibles en los métodos static
*/