import { useEffect, useState } from "react";
import { Pokemon } from "@/shared/interfaces";
import api from "@/api/pokemon";


// SERVICE FETCH-POKEMONS
const fetchPokemons = async (): Promise<Pokemon[]> => {
  try {
    const data: Pokemon[] = await api.list()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    }
    return []
  }
}

export function usePokemon () {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)
  const [loading, updateLoading] = useState<boolean>(false)

  useEffect(() => {
    const init = async () => {
      try {
        updateLoading(true)
        const pokemons = await fetchPokemons()
        setPokemons(pokemons)
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      } finally {
        updateLoading(false)
      }
    }
    init()
  }, [])

  return { pokemons, loading }
}