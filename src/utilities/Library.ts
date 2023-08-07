import { CustomError } from "@/utilities"
import { Library as LibraryType } from "@/shared/types.d"

export class Library {
  protected books: LibraryType

  constructor(books: LibraryType) {
    this.books = books
  }

  private async fetchData () {
    const response = await fetch('api/books.json', { headers: { 'Content-Type': 'application/json' } })
    if (!response.ok) {
      throw new CustomError({ statusCode: response.status, statusText: response.statusText })
    }
    const data: LibraryType = await response.json()
    return data
  }

  getTotalBooks () {
    return this.books.library.length
  }

  async loadingBooks (): Promise<LibraryType> {
    try {
      const data = await this.fetchData()
      // TODO: mapear la información
      return data
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      // manejar otro tipo de error
      throw new Error("An unexpected error occurred while loading the library.")
    }
  }
}