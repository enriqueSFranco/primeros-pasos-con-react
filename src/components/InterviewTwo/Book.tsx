import { type Book } from '@/shared/types.d'
import { IconSave } from '../Icon'
import styles from './Book.module.css'

interface BookProps {
  book: Book
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <figure className={styles.wrapper_book}>
      <div className={styles.book_cover}>
        <header className={styles.book_header}>
          <button className={styles.book_btn_save}><IconSave /></button>
        </header>
        <img src={book.cover} alt={`book-${book.title}`} />
      </div>
      <figcaption className={styles.book_details}>
        <h2>{book.title}</h2>
        <h3>{book.author['name']}</h3>
      </figcaption>
    </figure>
  )
}

export default Book