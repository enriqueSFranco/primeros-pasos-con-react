import { useFacts, useCats } from "../hooks"
import CardLoader from "../components/InterviewOne/CardLoader"
import Title from "../components/Title"
import CardCat from "../components/InterviewOne/CardCat"

const BASE_URL_CAT = 'https://cataas.com'

const InterviewOne = () => {
  const { fact, loading, refreshFact } = useFacts()
  const { cat, loading: loadingImg } = useCats({ factSlice: fact })

  if (loadingImg) {
    return <CardLoader />
  }

  return (
    <section className="container_app_one">
      <Title text="Prueba técnica Fact y Cats" />
      <CardCat
        baseUrl={BASE_URL_CAT}
        cat={cat}
        fact={fact}
        loading={loading}
      />
      <button onClick={refreshFact}>Get new Fact</button>
    </section>
  )
}

export default InterviewOne
