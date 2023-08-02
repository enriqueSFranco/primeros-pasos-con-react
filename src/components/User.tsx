import { type User } from "../shared/types.d"

const User: React.FC<User> = ({ name, age, username, email }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  )
}

export default User