import { useCallback, useId, useMemo, useState } from 'react'
import { usePokemonStorage } from '@/stores/pokemon.store'
import { Pokemon } from '@/shared/interfaces'
import { IconCart, IconHeart } from '@/components/Icon'
import { usePokemon } from '@/hooks/usePokemons'

// HELPER
function calculateTotalToPay (cart: Pokemon[]) {
  let total = 0
  cart.forEach(item => {
    const { price } = item
    total += price
  })
  return total
}

// POKEMON CONTAINER
interface PokemonContainerProps {
  pokemon: Pokemon
}
const PokemonContainer: React.FC<PokemonContainerProps> = ({ pokemon }) => {
  const {
    favorites,
    addToFavs,
    removeToFavs,
    addToCart
  } = usePokemonStorage(state => ({
    favorites: state.favorites,
    addToFavs: state.addToFavs,
    removeToFavs: state.removeToFavs,
    addToCart: state.addToCart
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
      handleFavClick={handleFavClick}
      handleAddToCartClick={addToCart}
    />
  )
}

interface PokemonProps {
  pokemon: Pokemon
  isFavPokemon?: boolean
  handleFavClick: () => void
  handleAddToCartClick: (pokemon: Pokemon) => void
}
const Pokemon: React.FC<PokemonProps> = ({ pokemon, isFavPokemon, handleFavClick, handleAddToCartClick }) => {

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
          <button onClick={() => handleAddToCartClick(pokemon)} className='add-to-cart-button'>
            <IconCart />
          </button>
          <button className='favorite-button' onClick={handleFavClick}>
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
  const cart = usePokemonStorage(state => state.cart)
  const favorites = usePokemonStorage(state => state.favorites)

  const hasFavs = useMemo(() => favorites.length > 0, [favorites])

  const totalPokemons = useMemo(() => cart.length, [cart])

  const totalToPay = useMemo(() => calculateTotalToPay(cart), [cart])

  const matchedPokemons = useMemo(() => {
    if (pokemons === null) return []

    return query.trim() ?
      pokemons.filter(pokemon => {
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      }) : pokemons
  }, [pokemons, query])

  if (loading) {
    return <p>Cargando...</p>
  }

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
      <section className='interview_six'>
        {matchedPokemons.map((pokemon) => (
          <PokemonContainer
            key={`pokemon-${pokemon.id}`}
            pokemon={pokemon}
          />
        ))}
      </section>
      <section className='wrapper-favs'>
        <h2 style={{ textAlign: 'center' }}>Equipo pokemon</h2>
        <ul className='fav-list'>
          {hasFavs ? favorites.map((pokemon) => (
            <li key={`pokemon-fav-${pokemon.id}`}>
              <PokemonContainer
                key={`pokemon-${pokemon.name}`}
                pokemon={pokemon}
              />
            </li>
          )) : <p>Aun no tienes ningun pokemon en tu equipo</p>}
        </ul>
      </section>

      <footer className='footer_pokemon'>
        <button className='nes-btn is-primary'>{totalPokemons} items (total ${totalToPay})</button>
      </footer>
    </>
  )
}

export default InterviewSix
