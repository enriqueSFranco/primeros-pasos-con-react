import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useLibrary } from "@/stores/library.store"
import BookDetails from "@/components/InterviewTwo/BookDetails"
import { getBook } from "@/services/library"
import { Book } from "@/shared/types.d"

const DetailsBook = () => {
  const [book, setBook] = useState<Book | undefined>(undefined)
  const navigate = useNavigate()
  const { library } = useLibrary(state => ({ library: state.library }))
  const { title } = useParams<{ title: string }>()

  useEffect(() => {
    if (title != undefined) {
      const foundBook = getBook({ library, title })
      setBook(foundBook)
    }
  }, [title])

  function handleNavigate () {
    navigate('/')
  }

  if (title === undefined) {
    return (
      <section>
        <p>Error: No se encontró el título del libro.</p>
        <button onClick={handleNavigate}>Regresar</button>
      </section>
    )
  }

  return (
    <section>
      <header>
        <button onClick={handleNavigate}>Regresar</button>
        <h2>Detalles del libro {title}</h2>
      </header>
      <BookDetails book={book} />
    </section>
  )
}

export default DetailsBook