import { Link } from 'react-router-dom'
import { type Book } from '@/shared/types.d'
import { IconSave } from '../Icon'
import styles from './Book.module.css'
import { useLibrary } from '@/stores/library.store'

interface BookProps {
  book: Book
}

const Book: React.FC<BookProps> = ({ book }) => {
  const { readingList, addToReadingList } = useLibrary(state => ({ readingList: state.readingList, addToReadingList: state.addToReadingList }))

  const handleAddToReadingList = (book: Book) => () => addToReadingList(book)

  const isBookInReadingList = readingList.library.some(listBook => listBook.book.title === book.title)

  const fill = isBookInReadingList ? '#FFD42D' : 'none'
  const stroke = isBookInReadingList ? 'none' : '#fff'


  return (
    <figure className={styles.wrapper_book}>
      <div className={styles.book_cover}>
        <header className={styles.book_header}>
          <button
            onClick={handleAddToReadingList(book)}
            className={styles.book_btn_save}
          >
            <IconSave fill={fill} stroke={stroke} />
          </button>
        </header>
        <img src={book.cover} alt={`book-${book.title}`} loading='lazy' />
      </div>
      <Link to={`${book.title}`}>
        <figcaption className={styles.book_details}>
          <h2>{book.title}</h2>
          <h3>{book.author['name']}</h3>
        </figcaption>
      </Link>
    </figure>
  )
}

export default Book