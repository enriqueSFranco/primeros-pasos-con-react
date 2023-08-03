import { type Fact } from "../shared/types.d"

export async function getRandomFact () {
  try {
    const url = new URL('https://catfact.ninja/fact')
    const factResponse = await fetch(url)

    if (!factResponse.ok) {
      const error = {
        err: new Error('Oppps, ha ocurrido un error durante la petición.'),
        statusCode: factResponse.status,
        statusText: factResponse.status
      }
      throw error
    }
    const data: Fact = await factResponse.json()
    const { fact } = data
    const factSlice = fact?.split(' ', 3).join(' ')

    return { fact, factSlice }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}