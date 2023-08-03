import { useState } from "react"
/*
  -> UN COMPONENTE ES UNA FUNCION QUE CREA UN ELEMENTO
  -> EL NOMBRE DE UN COMPONENTE DEBE SER ESCRITO EN PascalCase, LA RAZÓN ES PORQUE
    REACT NO SABE DIFERENCIA SI ES UN COMPONENTE O UN ELEMENTO, ES DECIR,

    function specialButton () {
      return (
          <button></button>
        )
    }

    LO QUE SE VA A RENDERIZAR EN EL DOM ES <specialbutton></specialbutton> (RENDERIZA UN ELEMENTO)

    DIFERENCIA ENTRE COMPONENTE Y ELEMENTO

*/

// componente padre
function Counter () {
  const [count, updateCount] = useState(0)

  function handleCount () {
    updateCount(count + 1)
  }

  return (
    <div>
      <Count count={count} />
      <button onClick={handleCount}>increment</button>
    </div>
  )
}

// componente hijo
interface CountProps {
  count: number
}
const Count: React.FC<CountProps> = ({ count }) => {
  const [number, updateNumber] = useState(count)

  return <span>{number}</span>
}

export default Counter