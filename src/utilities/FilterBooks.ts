import { Book, LibraryElement, Library } from '@/shared/types.d'

export class FilterBooks {
  private books: Library

  constructor(books: Library) {
    this.books = books
  }

  getBooks (): Library {
    return this.books
  }

  static async findBooksByTitle ({ title, library }: { title: Book['title'], library: Library }): Promise<LibraryElement[]> {
    try {
      const formattedTitle = title.trim().toLowerCase()
      if (!formattedTitle) {
        throw new Error('El título del libro no puede estar vacío.')
      }
      const { library: books } = library
      const bookMatches = books.filter(({ book }) => book.title.toLowerCase() === formattedTitle)

      return bookMatches
    } catch (error) {
      return []
    }
  }
}

/* 
  Las atributos privados no están disponibles en los métodos static
*/