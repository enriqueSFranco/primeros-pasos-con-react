import { useMemo } from "react"
import { useLibrary } from "@/stores/library.store"
import { useNavigate } from "react-router-dom"
import Book from "@/components/InterviewTwo/Book"

const ReadingList: React.FC = () => {
  const navigate = useNavigate()
  const { readingList } = useLibrary(state => ({ readingList: state.readingList }))
  const handleNavigate = () => navigate('/')

  const hasReadingList = useMemo(() => readingList.library.length > 0, [readingList])

  return (
    <section className='wrapper_library'>
      <header>
        <button onClick={handleNavigate}>Regresar</button>
      </header>
      <h2>lista de lectura ({readingList.library.length})</h2>
      {hasReadingList ? (
        <ul className="reading-list">
          {readingList.library.map(({ book }) => (<Book book={book} isInReadingList />))}
        </ul>
      ) : (
        <div>No hay libros por leer</div>
      )}
    </section>
  )
}

export default ReadingList
