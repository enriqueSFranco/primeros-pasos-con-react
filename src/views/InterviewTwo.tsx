import { useEffect, useMemo } from 'react'
import { useLibrary } from '@/stores/library.store'
import HeaderLibrary from '@/components/InterviewTwo/HeaderLibrary'
import Library from '@/components/InterviewTwo/Library'
import LibraryFilters from '@/components/InterviewTwo/LibraryFilters'
import { BookLoader } from '@/services/library'

const bookLoader = new BookLoader

const InterviewTwo = () => {
  const { library, loading, filteredBooks, fetchLibrary } = useLibrary(state => ({
    library: state.library,
    loading: state.loading,
    filteredBooks: state.filteredBooks,
    readingList: state.readingList,
    fetchLibrary: state.fetchLibrary,
  }))

  useEffect(() => {
    fetchLibrary(bookLoader)
  }, [])

  // useEffect(() => {
  //   const handleStorageChange = (e: StorageEvent) => {
  //     if (e.key === 'library-storage') {
  //       console.log('se ha modificado informacion del localstorage')
  //     }
  //   }

  //   window.addEventListener('storage', handleStorageChange)

  //   return () => window.removeEventListener('storage', handleStorageChange)
  // }, [])

  const hasFilteredBooks = useMemo(() => filteredBooks.library.length > 0 ? filteredBooks : library, [filteredBooks, library])

  return (
    <section className='interview_tow'>
      <HeaderLibrary>
        <h2>📕books</h2>
      </HeaderLibrary>
      <main className='wrapper_library'>
        <HeaderLibrary>
          <LibraryFilters />
        </HeaderLibrary>
        <Library data={hasFilteredBooks} loading={loading} />
      </main>
    </section>
  )
}

export default InterviewTwo