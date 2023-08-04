import { Book } from '@/shared/types.d'
import BookFilter from './BookFilter'
import { IconBook, IconBooks } from '../Icon'

interface FilterBookProps {
  genres: Book['genre'][]
  handleSelectedGenre: ({ genre }: { genre: Book['genre'] }) => void
}

const FilterBooks: React.FC<FilterBookProps> = ({ genres, handleSelectedGenre }) => {
  return (
    <ul className='library__filters-list'>
      <li>
        <BookFilter
          genre='todos'
          handleSelectedGenre={handleSelectedGenre}
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