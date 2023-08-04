import { useLibrary } from '@/stores/library.store'
import { IconBook, IconBooks } from '@/components/Icon'
import HeaderLibrary from '@/components/InterviewTwo/HeaderLibrary'
import Library from '@/components/InterviewTwo/Library'
import Form from '@/components/InterviewTwo/Form'
import BookFilter from '@/components/InterviewTwo/BookFilter'

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
        </aside>
        <Library data={library} />
      </main>
    </section>
  )
}

export default InterviewTwo