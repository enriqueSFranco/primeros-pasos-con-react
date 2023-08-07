export class CustomError extends Error {
  constructor({ statusCode, statusText }: { statusCode: number, statusText: string }) {
    super(`Oops, an error occurred during the request. Status: ${statusCode}, ${statusText}`)
    this.name = 'LibraryError'
  }
}