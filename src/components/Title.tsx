interface TitleProps {
  text?: string
}

const Title: React.FC<TitleProps> = ({ text = 'Hello World' }) => {
  return (
    <h2>{text}</h2>
  )
}

export default Title

/* 
  LAS PROPS DEBERIAN SER INMUTABLES
  EL MODIFICAR UNA PROP EVITAMOS QUE REACT TENGA LA SEGURARID DE LO QUE VA A RENDERIZAR
*/