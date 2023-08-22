import { create } from "zustand"
import { persist } from "zustand/middleware"
import { createPokemonFavoritesSlice } from "./pokemon-favorites-slice.store"
import { createPokemonCartSlice } from "./pokemon-cart-slice.store"
import { Pokemon } from "@/shared/interfaces"

type PokemonFavoritesSlice = {
  favorites: Pokemon[]
  isFavorite: boolean
  addToFavs: (pokemon: Pokemon) => void
  removeToFavs: (pokemonId: Pokemon['id']) => void
}

type PokemonCartSlice = {
  cart: Pokemon[]
  totalToPay: number
  addToCart: (pokemon: Pokemon) => void
}

export const usePokemonStorage = create<PokemonFavoritesSlice & PokemonCartSlice>()(
  persist(
    (...a) => ({
      ...createPokemonFavoritesSlice(...a),
      ...createPokemonCartSlice(...a)
    }),
    {
      name: 'pokemon-storage'
    }
  )
)