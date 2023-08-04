import './App.css'
import { type User as UserType } from './shared/types'
import Counter from './components/Counter'
import Title from './components/Title'
import User from './components/User'
import Game from './views/Game'
import RenderConditional from './RenderConditional'
import InterviewOne from './views/InterviewOne'
import InterviewTwo from './views/InterviewTwo'

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
      <InterviewOne />

      {/* INTERVIEW TWO */}
      <InterviewTwo />
    </div>
  )
}

export default App
