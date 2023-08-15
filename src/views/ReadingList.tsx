import { useMemo } from "react"
import { useLibrary } from "@/stores/library.store"
import { useNavigate } from "react-router-dom"
import Library from "@/components/InterviewTwo/Library"

const ReadingList: React.FC = () => {
  const navigate = useNavigate()
  const { readingList } = useLibrary(state => ({ readingList: state.readingList }))
  const handleNavigate = () => navigate('/')

  const hasReadingList = useMemo(() => readingList.library.length > 0, [readingList])

  console.log(readingList.library.length)

  return (
    <section className='wrapper_library'>
      <header>
        <button onClick={handleNavigate}>Regresar</button>
      </header>
      <h2>lista de lectura</h2>
      {hasReadingList ? (
        <Library data={readingList} loading={false} />
      ) : (
        <div>No hay libros por leer</div>
      )}
    </section>
  )
}

export default ReadingList
