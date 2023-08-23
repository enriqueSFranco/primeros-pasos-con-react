import { StateCreator } from "zustand"
import { Pokemon } from "@/shared/interfaces"

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
  deleteItemToCart: (pokemonId: Pokemon['id']) => void
}

type StateWithActions = State & Action

export const createPokemonCartSlice: StateCreator<StateWithActions> = (set, get) => ({
  cart: {},
  totalToPay: 0,
  addToCart: (pokemon: Pokemon) => {
    const { cart } = get()

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
  },
  deleteItemToCart: (pokemonId: Pokemon['id']) => {
    const { cart } = get()
    const updatedCart = { ...cart }

    if (updatedCart[pokemonId].quantity > 0) {
      updatedCart[pokemonId] = {
        item: updatedCart[pokemonId].item,
        quantity: updatedCart[pokemonId].quantity - 1
      }
    }
    set(({ cart: updatedCart }))
  }
})