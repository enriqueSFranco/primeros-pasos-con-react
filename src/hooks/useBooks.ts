import { useEffect, useState } from "react"
import { loadingBooks } from "@/services/library"
import type { Library } from "@/shared/types.d"

export function useBooks () {
  const [books, updateBooks] = useState<Library>({ library: [] })

  useEffect(() => {
    const getData = async () => {
      const books: Library = await loadingBooks()
      updateBooks(books)
    }
    getData()
  }, [])

  return { books }
}