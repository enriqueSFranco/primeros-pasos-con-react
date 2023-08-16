import { useId, useState } from 'react'
import { useLibrary } from '@/stores/library.store'
import styles from './FilterBooks.module.css'

const FilterBooks: React.FC = () => {
  const genreSelectedId = useId()
  const [genre, updateGenre] = useState<string>('all')
  const { genres, filterByGenre } = useLibrary(state => ({ genres: state.genres, filterByGenre: state.filterByGenre }))

  function handleChangeSelectedGenre (e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target
    updateGenre(value)
    filterByGenre(value)
  }

  return (
    <section className={styles.wrapper_filters}>
      <label className={styles.wraper_filter__select}>
        <span>Genero:</span>
        <select
          name="genres"
          id={genreSelectedId}
          value={genre}
          onChange={handleChangeSelectedGenre}
          className={styles.select}
        >
          <option value='all'>Todos</option>
          {genres.map(genre => (
            <option key={`genre-${genre}`} value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <form action="">
        <input
          type="range"
        />
      </form>
    </section>
  )
}

export default FilterBooks