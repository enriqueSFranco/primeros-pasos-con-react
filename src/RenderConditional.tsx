import Title from "./components/Title"

interface RenderConditionalProps {
  isAdmin: boolean
}

const users = []

const RenderConditional: React.FC<RenderConditionalProps> = ({ isAdmin }) => {
  return (
    <div>
      <Title text="Render Conditional" />
      <span>
        {isAdmin ? 'Admin' : 'User Common'}
      </span>
      {users.length && users.map(user => (<div key={user.name}>{user.name}</div>))}
    </div>
  )
}

export default RenderConditional