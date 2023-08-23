import { StateCreator } from "zustand"
import { Pokemon } from "@/shared/interfaces"

type State = {
  favorites: Pokemon[]
  isFavorite: boolean
}

type Action = {
  addToFavs: (pokemon: Pokemon) => void
  removeToFavs: (pokemonId: Pokemon['id']) => void
}

export const createPokemonFavoritesSlice: StateCreator<State & Action> = (set, get) => ({
  favorites: [],
  isFavorite: false,
  addToFavs: (pokemon: Pokemon) => {
    set((state) => {
      const pokemonInCartIndex = state.favorites.findIndex(pokemonFavorite => pokemonFavorite.id === pokemon.id)
      if (pokemonInCartIndex >= 0) {
        const newFavorites = structuredClone(state.favorites)
        newFavorites[pokemonInCartIndex] = {
          ...newFavorites[pokemonInCartIndex],
          quantity: newFavorites[pokemonInCartIndex].quantity + 1
        }
        return { favorites: newFavorites }
      } else {
        return { favorites: [...state.favorites, { ...pokemon, quantity: 1 }] }
      }
      return
    })
  },
  removeToFavs: (pokemonId: Pokemon['id']) => {
    const { favorites } = get()
    const updatedFavorites = favorites.filter(pokemon => pokemon.id !== pokemonId)
    set(state => ({ ...state, favorites: updatedFavorites, isFavorite: false }))
  }
})