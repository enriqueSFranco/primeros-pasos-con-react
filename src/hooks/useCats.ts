import { useEffect, useState } from "react"
import { Fact } from "../shared/types.d"
import { getCat } from "../services/getCat"

export function useCats ({ factSlice }: { factSlice: Fact["fact"] }) {
  const [cat, updateCat] = useState<Fact["fact"]>("")
  const [loading, updateLoading] = useState(false)

  useEffect(() => {
    getCat({ fact: factSlice })
      .then(response => {
        updateLoading(true)
        if (response) {
          updateCat(response.url)
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      }).finally(() => updateLoading(false))
  }, [factSlice])

  return { cat, loading }
}