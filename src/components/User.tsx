import { useState } from "react"
import { type User } from "../shared/types.d"

const INITIAL_STATE = false

const User: React.FC<User> = ({ name, age, username, email }) => {
  const [following, updateFollowing] = useState<boolean>(INITIAL_STATE)

  const text = following ? 'Unfollow' : 'Follow'
  const buttonClass = following ? 'following' : ''

  function handleFollowing () {
    updateFollowing(prevState => !prevState)
  }

  return (
    <article className="tw-card">
      <div className="tw-card__avatar">
        <img src=" https://unavatar.io/instagram/willsmith" alt={username} />
        <p>@{username}</p>
      </div>
      <div className="tw-card__button">
        <button onClick={handleFollowing} className={buttonClass}>{text}</button>
      </div>
    </article>
  )
}

export default User