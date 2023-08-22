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
    set((state) => ({
      ...state,
      favorites: [...state.favorites, pokemon],
      isFavorite: true
    }))
  },
  removeToFavs: (pokemonId: Pokemon['id']) => {
    const { favorites } = get()
    const updatedFavorites = favorites.filter(pokemon => pokemon.id !== pokemonId)
    set(state => ({ ...state, favorites: updatedFavorites, isFavorite: false }))
  }
})