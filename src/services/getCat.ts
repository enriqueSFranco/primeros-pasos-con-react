import type { Fact, CatFact } from "../shared/types.d"

export async function getCat ({ fact }: { fact: Fact["fact"] }) {
  try {
    const url = new URL(`https://cataas.com/cat/says/${fact}?json=true`)
    const responseCat = await fetch(url)
    if (!responseCat.ok) {
      const error = {
        err: new Error('Oppps, ha ocurrido un error durante la petición.'),
        statusCode: responseCat.status,
        statusText: responseCat.status
      }
      throw error
    }
    const catFact: CatFact = await responseCat.json()
    return catFact
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}