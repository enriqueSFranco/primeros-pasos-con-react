import { useLibrary } from '@/stores/library.store'
import { type Book, GENRES } from '@/shared/types.d'
import BookFilter from './BookFilter'
import { IconBook, IconBooks } from '../Icon'

interface FilterBookProps {
  genres: Book['genre'][] | []
}

const FilterBooks: React.FC<FilterBookProps> = ({ genres }) => {
  const { filterBy } = useLibrary(state => ({ filterBy: state.filterBy }))

  function handleSelectedGenre (e: React.ChangeEvent<HTMLInputElement>, genre: string): void {
    const { checked } = e.target

    filterBy({ typeFilter: genre })
  }

  return (
    <ul className='library__filters-list'>
      <li>
        <BookFilter
          genre='todos'
          handleSelectedGenre={(e) => handleSelectedGenre(e, GENRES.TODOS)}
        >
          <IconBooks />
        </BookFilter>
      </li>
      {genres.map(genre => (
        <li key={`genre-${genre}`}>
          <BookFilter
            genre={genre}
            handleSelectedGenre={handleSelectedGenre}
          >
            <IconBook />
          </BookFilter>
        </li>
      ))}
    </ul>
  )
}

export default FilterBooks