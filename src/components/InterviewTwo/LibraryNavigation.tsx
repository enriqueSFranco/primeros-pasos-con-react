import { Link } from 'react-router-dom'
import styles from './LibraryNavigation.module.css'

const LibraryNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li><Link className={styles.nav_link} to="/reading-list">Lista de lectura</Link></li>
      </ul>
    </nav>
  )
}

export default LibraryNavigation