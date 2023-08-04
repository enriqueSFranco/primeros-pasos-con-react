import { type Library as LibraryType } from '@/shared/types.d'

export class Library {
  protected library: LibraryType

  constructor(books: LibraryType) {
    this.library = books
  }

  getLibrary () {
    return this.library
  }
}