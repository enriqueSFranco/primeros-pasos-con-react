import { Book } from "@/shared/types"
import FilterBooks from "./FilterBooks"
import Form from "./Form"
import LibraryNavigation from "./LibraryNavigation"

interface LibraryFiltersProps {
  genres: Book['genre'][]
}

const LibraryFilters: React.FC<LibraryFiltersProps> = ({ genres }) => {
  return (
    <section className='wrapper_library__filters'>
      <Form />
      <FilterBooks genres={genres} />
      <LibraryNavigation />
    </section>
  )
}

export default LibraryFilters