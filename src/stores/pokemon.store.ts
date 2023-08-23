import { create } from "zustand"
import { persist } from "zustand/middleware"
import { createPokemonFavoritesSlice } from "./pokemon-favorites-slice.store"
import { createPokemonCartSlice } from "./pokemon-cart-slice.store"
import { Pokemon } from "@/shared/interfaces"

type CartItem = {
  item: Pokemon
  quantity: number
}

type PokemonFavoritesSlice = {
  favorites: Pokemon[]
  isFavorite: boolean
  addToFavs: (pokemon: Pokemon) => void
  removeToFavs: (pokemonId: Pokemon['id']) => void
}

type PokemonCartSlice = {
  cart: Record<Pokemon['id'], CartItem>
  totalToPay: number
  addToCart: (pokemon: Pokemon) => void
  deleteItemToCart: (pokemonId: Pokemon['id']) => void
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