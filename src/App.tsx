import './App.css'
import { type User as UserType } from './shared/types'
import BaseButton from './components/BaseButton'
import Title from './components/Title'
import User from './components/User'
import Game from './views/Game'

const user: UserType = { name: 'enrique', age: 24, username: 'kike', email: 'enrique@gmail.com' }

function App () {
  return (
    <main>
      {/* COMPONENTES*/}
      <Title />
      <BaseButton />

      {/* CARD */}
      <User {...user} />

      {/* JUEGO DE GATO */}
      <Game />
    </main>
  )
}

export default App
