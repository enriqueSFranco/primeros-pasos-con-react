import { useEffect, useState } from "react"
import { getRandomFact } from "../services/getRandomFact"
import { type Fact as FactType } from "../shared/types"

export function useFacts () {
  const [fact, updateFact] = useState<FactType["fact"] | null>(null)
  const [loading, updateLoading] = useState<boolean>(true)

  async function refreshFact () {
    const newFact = await getRandomFact()
    if (newFact !== undefined) {
      updateFact(newFact)
    }
  }

  useEffect(() => {
    getRandomFact()
      .then(fact => {
        updateLoading(true)
        if (fact !== undefined) {
          updateFact(fact)
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      }).finally(() => {
        updateLoading(false)
      })
  }, [])

  return { fact, loading, refreshFact }
}