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

function BaseButton () {
  return (
    <button>click</button>
  )
}

export default BaseButton