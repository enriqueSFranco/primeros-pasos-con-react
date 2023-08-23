import { StateCreator } from "zustand"
import { Pokemon } from "@/shared/interfaces"

const CONFIG = {
  MAX_STORE: 3,
  MAX_MONEY: 10
}

type CartItem = {
  item: Pokemon
  quantity: number
}

type State = {
  cart: Record<Pokemon['id'], CartItem>
  totalToPay: number
}

type Action = {
  addToCart: (pokemon: Pokemon) => void
}

type StateWithActions = State & Action

export const createPokemonCartSlice: StateCreator<StateWithActions> = (set, get) => ({
  cart: {},
  totalToPay: 0,
  addToCart: (pokemon: Pokemon) => {
    const { cart, totalToPay } = get()
    if (totalToPay + pokemon.price > CONFIG.MAX_MONEY) return

    set(() => {
      if (cart[pokemon.id]) {
        return {
          cart: {
            ...cart,
            [pokemon.id]: {
              item: pokemon,
              quantity: cart[pokemon.id].quantity + 1
            }
          }
        }
      } else {
        return {
          cart: {
            ...cart,
            [pokemon.id]: {
              item: pokemon,
              quantity: 1
            }
          }
        }
      }
    })
  }
})