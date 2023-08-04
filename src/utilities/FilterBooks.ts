import type { Book, Library, LibraryElement } from '@/shared/types.d'
import library from '@/mocks/books.json'

export class FilterBooks {
  private books: Library = library

  constructor({ books }: { books: Library }) {
    this.books = books
  }

  findBook ({ title }: { title: Book['title'] }): LibraryElement[] {
    const bookMatches = this.books.library.filter(({ book }) => book.title === title)
    return title.trim().length > 0 ? bookMatches : []
  }

  getGenres (): Book["genre"][] {
    const genres: Set<Book["genre"]> = new Set<Book["genre"]>()
    for (const bookEntry of this.books.library) {
      const { book } = bookEntry
      genres.add(book.genre)
    }
    return Array.from(genres)
  }

  static filterBy = (filter: string) => () => {
    console.log(filter)
  }
}

/* 
  Las atributos privados no están disponibles en los métodos static
*/