import type { Book, Library } from "@/shared/types.d"

function extractGenresFromLibrary ({ library }: Library): Book["genre"][] {
  const uniqueGenres: Set<Book["genre"]> = new Set<Book["genre"]>()
  for (const libraryElement of library) {
    const { book } = libraryElement
    uniqueGenres.add(book.genre)
  }
  return Array.from(uniqueGenres)
}

export async function getAllGenres ({ library }: Library): Promise<Book["genre"][]> {
  try {
    const uniqueGenres = extractGenresFromLibrary({ library })
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