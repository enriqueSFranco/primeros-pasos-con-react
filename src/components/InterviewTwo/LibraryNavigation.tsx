import { Link } from 'react-router-dom'
import styles from './LibraryNavigation.module.css'
import { useLibrary } from '@/stores/library.store'
import { useMemo } from 'react'

const LibraryNavigation = () => {
  const { readingList } = useLibrary(state => ({ readingList: state.readingList }))

  const hasBooksOnReadingList = useMemo(() => readingList.library.length, [readingList])

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li><Link className={styles.nav_link} to="/reading-list">Lista de lectura ({hasBooksOnReadingList})</Link></li>
      </ul>
    </nav>
  )
}

export default LibraryNavigation