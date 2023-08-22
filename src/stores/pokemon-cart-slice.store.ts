import { StateCreator } from "zustand"
import { Pokemon } from "@/shared/interfaces"

type State = {
  cart: Pokemon[]
  totalToPay: number
}

type Action = {
  addToCart: (pokemon: Pokemon) => void
}

const CONFIG = {
  MAX_STORE: 3,
  MAX_MONEY: 10
}

export const createPokemonCartSlice: StateCreator<State & Action> = (set, get) => ({
  cart: [],
  totalToPay: 0,
  addToCart: (pokemon: Pokemon) => {
    const { totalToPay } = get()
    if (totalToPay + pokemon.price > CONFIG.MAX_MONEY) return

    set((state) => ({
      ...state,
      cart: [...state.cart, pokemon]
    }))
  }
})