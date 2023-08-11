import type { Book } from "@/shared/types.d";

export class ReadingList {
  private readingList: Book[] = []

  private isBookAdded (title: Book['title']): boolean {
    return this.readingList.some(book => book.title === title)
  }

  addToReadingList (book: Book): void {
    const books = this.readingList
    console.log('addToReadingList')
    if (!this.isBookAdded(book.title)) {
      books.push(book)
    }
  }

  getReadingList (): Book[] {
    return this.readingList
  }
}