import { type Library } from '@/shared/types.d'
import Book from './Book'
import styles from './Library.module.css'

interface LibraryProps {
  data: Library
}

const Library: React.FC<LibraryProps> = ({ data }) => {
  const { library } = data
  return (
    <article className={styles.wrapper_library}>
      <ul className={styles.book_list}>
        {library.map(({ book }) => (
          <Book key={`book-${book.ISBN}`} book={book} />
        ))}
      </ul>
    </article>
  )
}

export default Library