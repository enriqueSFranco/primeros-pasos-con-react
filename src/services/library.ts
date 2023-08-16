import { BookLoadService } from "@/shared/interfaces.d"
import type { Book, Library } from "@/shared/types.d"
import { CustomError } from "@/utilities"

function extractGenresFromLibrary (library: Library): Book["genre"][] {
  const uniqueGenres: Set<Book["genre"]> = new Set<Book["genre"]>()
  for (const libraryElement of library.library) {
    const { book } = libraryElement
    uniqueGenres.add(book.genre)
  }
  return Array.from(uniqueGenres)
}

export async function getAllGenres (library: Library): Promise<Book["genre"][]> {
  try {
    const uniqueGenres = extractGenresFromLibrary(library)
    // TODO: Mapear data
    return Array.from(uniqueGenres)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    }
    // manejar otro tipo de error
    throw new Error("An unexpected error occurred while loading the library.")
  }
}

export function getBook ({ library, title }: { library: Library, title: Book['title'] }): Book | undefined {
  return library.library.find(({ book }) => book.title === title)?.book
}

export class BookLoader implements BookLoadService {

  async loadingBooks (): Promise<Library> {
    try {
      const response = await fetch('api/books.json', { headers: { 'Content-Type': 'application/json' } })
      if (!response.ok) {
        throw new CustomError({ statusCode: response.status, statusText: response.statusText })
      }
      const data: Library = await response.json()

      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`)
      }
      throw new Error("An unexpected error occurred while loading the library.")
    }
  }
} 
