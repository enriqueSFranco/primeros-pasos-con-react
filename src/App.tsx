import './App.css'
import { type User as UserType } from './shared/types'
import BaseButton from './components/BaseButton'
import Title from './components/Title'
import User from './components/User'

const user: UserType = { name: 'enrique', age: 24, username: 'kike', email: 'enrique@gmail.com' }

function App () {
  return (
    <>
      <Title />
      <BaseButton />
      <User {...user} />
    </>
  )
}

export default App
