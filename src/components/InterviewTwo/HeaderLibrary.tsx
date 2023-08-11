import styles from './Header.module.css'

interface HeaderLibraryProps {
  children: React.ReactNode
}

const HeaderLibrary: React.FC<HeaderLibraryProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}

export default HeaderLibrary