import FilterBooks from "./FilterBooks"
import Form from "./Form"
import LibraryNavigation from "./LibraryNavigation"

const LibraryFilters: React.FC = () => {
  return (
    <section className='wrapper_library__filters'>
      <Form />
      <FilterBooks />
      <LibraryNavigation />
    </section>
  )
}

export default LibraryFilters