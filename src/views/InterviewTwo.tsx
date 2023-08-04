import { useLibrary } from '@/stores/library.store'
import HeaderLibrary from '@/components/InterviewTwo/HeaderLibrary'
import Library from '@/components/InterviewTwo/Library'
import Form from '@/components/InterviewTwo/Form'
import FilterBooks from '@/components/InterviewTwo/FilterBooks'

const InterviewTwo = () => {
  const { library, getGenres } = useLibrary(state => ({ library: state.library, getGenres: state.getGenres }))
  const genres = getGenres()

  function handleSelectedGenre () { }

  return (
    <section className='interview_tow'>
      <HeaderLibrary />
      {/* TODO: CREAR LAYOUT PARA EL CONTENIDO PRINCIAL */}
      <main className='wrapper_library'>
        <aside className='wrapper_library__filters'>
          <Form />
          {/* filtros */}
          <FilterBooks
            genres={genres}
            handleSelectedGenre={handleSelectedGenre}
          />
        </aside>
        <Library data={library} />
      </main>
    </section>
  )
}

export default InterviewTwo