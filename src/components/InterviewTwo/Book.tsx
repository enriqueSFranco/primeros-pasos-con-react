import { Link } from 'react-router-dom'
import { type Book } from '@/shared/types.d'
import { IconSave } from '../Icon'
import styles from './Book.module.css'
import { ReadingList } from '@/utilities'

interface BookProps {
  book: Book
}

const Book: React.FC<BookProps> = ({ book }) => {
  const readingList = new ReadingList()
  return (
    <figure className={styles.wrapper_book}>
      <Link to={`/${book.title}`}>
        <div className={styles.book_cover}>
          <header className={styles.book_header}>
            <button
              onClick={() => readingList.addToReadingList(book)}
              className={styles.book_btn_save}
            >
              <IconSave />
            </button>
          </header>
          <img src={book.cover} alt={`book-${book.title}`} loading='lazy' />
        </div>
        <figcaption className={styles.book_details}>
          <h2>{book.title}</h2>
          <h3>{book.author['name']}</h3>
        </figcaption>
      </Link>
    </figure>
  )
}

export default Book