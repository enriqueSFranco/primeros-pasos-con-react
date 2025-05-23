import './App.css'
import { type User as UserType } from './shared/types'
import Counter from './components/Counter'
import Title from './components/Title'
import User from './components/User'
import Game from './views/Game'
import RenderConditional from './RenderConditional'
import AppReadingLinst from './router/routerAppReadingList'
import InterviewThree from './views/InterviewThree'
import InterviewFour from './views/InterviewFour'
import InterviewFive from './views/InterviewFive'
import Polymorphic from './Patterns/Polymorphic'
import InterviewSix from './views/InterviewSix'

const user: UserType = { name: 'enrique', age: 24, username: 'kike', email: 'enrique@gmail.com' }

function App () {
  return (
    <div className='App'>
      {/* COMPONENTES*/}
      <Title />

      {/* INICIALIZAR UN STATE CON LAS PROPS */}
      <Counter />

      {/* RENDER CONDITIONAL */}
      <RenderConditional isAdmin />

      {/* CARD */}
      <User {...user} />

      {/* JUEGO DE GATO */}
      <Game />

      {/* INTERVIEW ONE */}
      {/* <InterviewOne /> */}

      <AppReadingLinst />

      {/* INTERVIEW THREE */}
      <InterviewThree />

      {/* INTERVIEW FOUR */}
      <InterviewFour />

      {/* INTERVIEW FIVE */}
      <InterviewFive />

      {/* INTERVIEW SIX */}
      <InterviewSix />

      {/* PATTER POLIMORPHIC COMPONENT */}
      <Polymorphic as={'h2'}>
        Hello World 🌎
      </Polymorphic>
    </div>
  )
}

export default App
