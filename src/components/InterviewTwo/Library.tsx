import { type Library } from '@/shared/types.d'
import Book from './Book'
import styles from './Library.module.css'

interface LibraryProps {
  data: Library | null
  loading: boolean
}

const Library: React.FC<LibraryProps> = ({ data, loading }) => {
  if (loading) {
    return <div>cargando libros</div>
  }

  return (
    <article className={styles.wrapper_library}>
      <ul className={styles.book_list}>
        {data?.library.map(({ book }) => (
          <Book key={`book-${book.ISBN}`} book={book} />
        ))}
      </ul>
    </article>
  )
}

export default Library