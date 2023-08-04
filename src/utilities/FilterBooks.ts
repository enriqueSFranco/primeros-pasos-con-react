import { Library } from './Library'
import type { Book, Library as LibraryType, LibraryElement } from '@/shared/types.d'

export class FilterBooks extends Library {
  constructor({ books }: { books: LibraryType }) {
    super(books)
  }

  findBook ({ title }: { title: Book['title'] }): LibraryElement[] {
    const bookMatches = this.library.library.filter(({ book }) => book.title === title)
    return title.trim().length > 0 ? bookMatches : []
  }

  getGenres (): Book["genre"][] {
    const genres: Set<Book["genre"]> = new Set<Book["genre"]>()
    for (const bookEntry of this.library.library) {
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