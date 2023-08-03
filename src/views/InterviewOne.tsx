import { useFacts, useCats } from "../hooks"
import CardLoader from "../components/InterviewOne/CardLoader"
import factResponse from "../mocks/factResponsee.json"
import Title from "../components/Title"
import CardCat from "../components/InterviewOne/CardCat"

const INITIAL_FACT = factResponse.fact
const BASE_URL_CAT = 'https://cataas.com'

const InterviewOne = () => {
  const { fact, loading } = useFacts()
  const { cat, loading: loadingImg } = useCats({ initialFactSlice: fact })

  return (
    <section className="container_app_one">
      <Title text="Prueba técnica Fact y Cats" />
      {loadingImg
        ? (<CardLoader />)
        : (
          <CardCat
            baseUrl={BASE_URL_CAT}
            cat={cat}
            fact={fact}
            loading={loading}
          />
        )}
    </section>
  )
}

export default InterviewOne
