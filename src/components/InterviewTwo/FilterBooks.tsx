import { useLibrary } from '@/stores/library.store'
import { type Book } from '@/shared/types.d'

interface FilterBookProps {
  genres: Book['genre'][] | []
}

const FilterBooks: React.FC<FilterBookProps> = ({ genres }) => {

  return (
    <section>
      <select name="" id="">
        <option value='all'>Todos</option>
        {genres.map(genre => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <form action="">
        <input
          type="range"
        />
      </form>
    </section>
  )
}

export default FilterBooks