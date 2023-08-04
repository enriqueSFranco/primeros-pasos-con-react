import { type Library } from "@/shared/types.d"
import { createContext, useState } from "react"

// TODO: TERMINAR DE IMPLEMETAR EL CONTEXT

export const LibraryContext = createContext()

interface LibraryProviderProps {
  children: React.ReactNode
}

export const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
  const [libray, updatedLibrary] = useState<Library[] | null>(null)

  async function loadBooks () {
    try {
      const response = await fetch()
    } catch (error) {

    }
  }

  const data = {}

  return (
    <LibraryContext.Provider value={data}>
      {children}
    </LibraryContext.Provider>
  )
}