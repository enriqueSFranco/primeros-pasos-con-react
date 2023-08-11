import { useNavigate, useParams } from "react-router-dom"
import BookDetails from "@/components/InterviewTwo/BookDetails"

const DetailsBook = () => {
  const navigate = useNavigate()
  const { title } = useParams<{ title: string }>()

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
      <BookDetails title={title} />
    </section>
  )
}

export default DetailsBook