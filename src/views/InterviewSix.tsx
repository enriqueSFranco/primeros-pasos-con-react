import { useEffect, useMemo, useState } from 'react'
import api from '@/api/pokemon'
import { Pokemon } from '@/shared/interfaces'

const MAX_STORE = 2

function InterviewSix () {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [cart, updatedCart] = useState<Pokemon[]>([])
  const [loading, updatedLoading] = useState<boolean>(false)

  const totalPokemons = useMemo(() => cart.length, [cart])

  useEffect(() => {
    const getPokemons = async () => {
      try {
        updatedLoading(true)
        const pokemons = await api.list()
        setPokemons(pokemons)
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      } finally {
        updatedLoading(false)
      }
    }
    getPokemons()
  }, [])

  if (loading) {
    return <p>Cargando...</p>
  }

  function handleAddPokemon (pokemon: Pokemon) {
    if (cart.length >= MAX_STORE) return

    updatedCart(prevCart => {
      const newCart = [...prevCart, pokemon]
      return newCart
    })
  }

  return (
    <>
      <section className='interview_six'>
        {pokemons.map((pokemon) => (
          <figure key={pokemon.id} className='wrapper_pokemon'>
            <img className='nes-container' src={new URL(pokemon.image).href} alt={pokemon.name} />
            <figcaption>
              <div className='nes-info_pokemon'>
                <p>{pokemon.name}</p>
                <p>${pokemon.price}</p>
              </div>
              <p>{pokemon.description}</p>
              <button onClick={() => handleAddPokemon(pokemon)} className='nes-btn'>Agregar</button>
            </figcaption>
          </figure>
        ))}
      </section>
      <footer className='footer_pokemon'>
        <button className='nes-btn is-primary'>{totalPokemons} items</button>
      </footer>
    </>
  )
}

export default InterviewSix
