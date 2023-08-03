import { useEffect, useState } from "react"
import { getRandomFact } from "../services/getRandomFact"
import { type Fact as FactType } from "../shared/types"

export function useFacts () {
  const [fact, updateFact] = useState<FactType["fact"]>('')
  const [loading, updateLoading] = useState<boolean>(true)
  useEffect(() => {
    getRandomFact()
      .then(fact => {
        updateLoading(true)
        updateFact(fact?.fact)
      })
      .catch(error => {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      }).finally(() => {
        updateLoading(false)
      })
  }, [])

  return { fact, loading }
}