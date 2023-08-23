import { useCallback, useId, useMemo, useState } from 'react'
import { usePokemonStorage } from '@/stores/pokemon.store'
import { Pokemon } from '@/shared/interfaces'
import { IconCart, IconHeart } from '@/components/Icon'
import { usePokemon } from '@/hooks/usePokemons'

// POKEMON CONTAINER
interface PokemonContainerProps {
  pokemon: Pokemon
}
const PokemonContainer: React.FC<PokemonContainerProps> = ({ pokemon }) => {
  const cart = usePokemonStorage()

  const {
    favorites,
    addToFavs,
    removeToFavs,
  } = usePokemonStorage(state => ({
    favorites: state.favorites,
    addToFavs: state.addToFavs,
    removeToFavs: state.removeToFavs,
  }))

  // const totalToPay = useMemo(() => cart ? calculateTotalToPay(cart) : 0, [cart])
  const isFav = useMemo(() => favorites.some(fav => fav.id === pokemon.id), [favorites, pokemon.id])

  const handleFavClick = useCallback(() => {
    if (isFav) {
      removeToFavs(pokemon.id)
    } else {
      addToFavs(pokemon)
    }
  }, [addToFavs, removeToFavs, pokemon, isFav])

  return (
    <Pokemon
      pokemon={pokemon}
      isFavPokemon={isFav}
      handleFav={handleFavClick}
      handleAddToCart={cart.addToCart}
      handleDeleteItemInCart={cart.deleteItemToCart}
    />
  )
}

interface PokemonProps {
  pokemon: Pokemon
  isFavPokemon?: boolean
  handleFav: () => void
  handleAddToCart: (pokemon: Pokemon) => void
  handleDeleteItemInCart: (pokemonId: Pokemon['id']) => void
}
const Pokemon: React.FC<PokemonProps> = ({ pokemon, isFavPokemon, handleFav, handleAddToCart, handleDeleteItemInCart }) => {
  const cart = usePokemonStorage(state => state.cart)
  const cartItem = cart[pokemon.id]

  const handleIncrement = (pokemon: Pokemon) => () => handleAddToCart(pokemon)

  const handleDecrement = (pokemonId: Pokemon['id']) => () => handleDeleteItemInCart(pokemonId)

  return (
    <figure className='pokemon-card'>
      <img
        className='pokemon-image'
        src={new URL(pokemon.image).href}
        alt={pokemon.name}
      />
      <figcaption className='pokemon-details'>
        <div className='pokemon-info'>
          <p className='pokemon-name'>{pokemon.name}</p>
          <p className='pokemon-price'>${pokemon.price}</p>
        </div>
        <p className='pokemon-description'>{pokemon.description}</p>
        <footer className='pokemon-actions'>
          {cartItem?.quantity > 0 ? (
            <div className='cart-buttons'>
              <button onClick={handleIncrement(pokemon)}>+</button>
              <span>{cartItem?.quantity}</span>
              <button onClick={handleDecrement(pokemon.id)}>-</button>
            </div>
          ) : <button onClick={handleIncrement(pokemon)} className='add-to-cart-button'>
            <IconCart />
          </button>}
          <button className='favorite-button' onClick={handleFav}>
            <IconHeart fill={isFavPokemon ? '#ff0000' : '#fff'} />
          </button>
        </footer>
      </figcaption>
    </figure>
  )
}

function InterviewSix () {
  const [query, updatedQuery] = useState<string>('')
  const inputQueryHintId = useId()
  const { pokemons, loading } = usePokemon()
  // const cart = usePokemonStorage(state => state.cart)
  const favorites = usePokemonStorage(state => state.favorites)

  const hasFavs = useMemo(() => favorites.length > 0, [favorites])

  // const totalPokemons = useMemo(() => Object.keys(cart).length, [cart])

  const matchedPokemons = useMemo(() => {
    if (pokemons === null) return []
    return query.trim() ?
      pokemons?.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(query.toLowerCase())
      }) : pokemons
  }, [pokemons, query])

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { value } = e.target
    updatedQuery(value)
  }

  return (
    <>
      <div className='wrapper_form__pokemon'>
        <form className='form__pokemon'>
          <div className='box_input'>
            <input
              name='query'
              id={inputQueryHintId}
              type='text'
              placeholder='Squirtle, Charmander, Eevee, ...'
              value={query}
              onChange={handleChange}
            />
            <button className='is-primary btn-search'>Buscar</button>
          </div>
        </form>
      </div>
      <div className='container-pokemons'>
        <section className='grid-left'>
          {loading ? (<p>cargando...</p>) : (
            <ul className='pokemon-list'>
              {matchedPokemons.map((pokemon) => (
                <li key={`pokemon-${pokemon.id}`}>
                  <PokemonContainer pokemon={pokemon} />
                </li>
              ))}
            </ul>
          )}

        </section>
        <section className='grid-right'>
          <h2 style={{ textAlign: 'center' }}>Equipo pokemon</h2>
          <ul className='fav-list'>
            {hasFavs ? favorites.map((pokemon) => (
              <li key={`pokemon-fav-${pokemon.id}`}>
                <PokemonContainer pokemon={pokemon} />
              </li>
            )) : <p>Aun no tienes ningun pokemon en tu equipo</p>}
          </ul>
        </section>
      </div>

      <footer className='footer_pokemon'>
        {/* <button className='nes-btn is-primary'>{totalPokemons} items (total)</button> */}
      </footer>
    </>
  )
}

export default InterviewSix
