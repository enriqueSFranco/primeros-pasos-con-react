import { useEffect, useState } from "react"
import { Fact } from "../shared/types.d"
import { getCat } from "../services/getCat"

export function useCats ({ initialFactSlice }: { initialFactSlice: Fact["fact"] }) {
  const [cat, updateCat] = useState(initialFactSlice)
  const [loading, updateLoading] = useState(false)

  useEffect(() => {
    getCat({ fact: initialFactSlice })
      .then(response => {
        updateLoading(true)
        updateCat(response?.url)
      })
      .catch(error => {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      }).finally(() => updateLoading(false))
  }, [initialFactSlice])

  return { cat, loading }
}