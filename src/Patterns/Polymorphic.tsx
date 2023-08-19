/*
el patrón de componente polimorfico le permite especificar qué etiqueta HTML usar para representar 
su componente usando as prop.
*/

type PolymorphicProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
}

const Box = <T extends React.ElementType> ({ as, children, ...props }: PolymorphicProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || 'div'
  return <Component {...props}>{children}</Component>
}


export default Box