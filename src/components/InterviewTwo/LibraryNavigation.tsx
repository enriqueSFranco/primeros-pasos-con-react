import { Link } from "react-router-dom"

const LibraryNavigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Biblioteca</Link></li>
        <li><Link to="/reading-list">Mi lista de lectura</Link></li>
      </ul>
    </nav>
  )
}

export default LibraryNavigation