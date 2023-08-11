import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLibrary } from '@/stores/library.store'
import HeaderLibrary from '@/components/InterviewTwo/HeaderLibrary'
import Library from '@/components/InterviewTwo/Library'
import Form from '@/components/InterviewTwo/Form'
import FilterBooks from '@/components/InterviewTwo/FilterBooks'

const InterviewTwo = () => {
  const { library, loading, genres, filteredBooks, loadingLibrary, loadingGenres } = useLibrary(state => ({
    library: state.library,
    loading: state.loading,
    genres: state.genres,
    filteredBooks: state.filteredBooks,
    loadingLibrary: state.loadingLibrary,
    loadingGenres: state.loadingGenres
  }))

  useEffect(() => {
    loadingLibrary()
  }, [])

  const hasFilteredBooks = filteredBooks.library.length > 0 ? filteredBooks : library

  return (
    <section className='interview_tow'>
      <HeaderLibrary />
      <main className='wrapper_library'>
        <header>
          <aside className='wrapper_library__filters'>
            <Form />
            <FilterBooks genres={genres} />
            <div>
              {/* TODO: IMPLEMENT SEPARATOR */}
            </div>
            <nav>
              <ul>
                <li><Link to="/">Biblioteca</Link></li>
                <li><Link to="/reading-list">Mi lista de lectura</Link></li>
              </ul>
            </nav>
          </aside>
        </header>
        <Library data={hasFilteredBooks} loading={loading} />
      </main>
    </section>
  )
}

export default InterviewTwo