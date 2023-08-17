import { Link } from 'react-router-dom'
import { type Book } from '@/shared/types.d'
import { IconSave } from '../Icon'
import { useLibrary } from '@/stores/library.store'
import styles from './Book.module.css'

interface BookProps {
  book: Book
  isInReadingList?: boolean
}

const Book: React.FC<BookProps> = ({ book, isInReadingList = false }) => {
  const { readingList, addToReadingList, removeToReadingList } = useLibrary(state => ({
    readingList: state.readingList,
    addToReadingList: state.addToReadingList,
    removeToReadingList: state.removeToReadingList
  }))

  const handleAddToReadingList = (book: Book) => () => addToReadingList(book)
  const handleRemoveToReadingList = (book: Book) => () => removeToReadingList(book)

  const isBookInReadingList = readingList.library.some(listBook => listBook.book.title === book.title)

  const fill = isBookInReadingList ? '#FFD42D' : 'none'
  const stroke = isBookInReadingList ? 'none' : '#fff'

  return (
    <figure className={styles.wrapper_book}>
      <div className={styles.book_cover}>
        {isBookInReadingList ? <div className={styles.is_in_reading_list}></div> : null}
        <header className={styles.book_header}>
          <button
            onClick={isInReadingList ? handleRemoveToReadingList(book) : handleAddToReadingList(book)}
            className={styles.book_btn_save}
          >
            <IconSave fill={fill} stroke={stroke} />
          </button>
        </header>
        <img src={book.cover} alt={`book-${book.title}`} loading='lazy' />
      </div>
      <Link to={book.title}>
        <figcaption className={styles.book_details}>
          <h2>{book.title}</h2>
          <h3>{book.author['name']}</h3>
        </figcaption>
      </Link>
    </figure>
  )
}

export default Book