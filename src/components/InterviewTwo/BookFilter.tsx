import { type Book } from "@/shared/types.d"
import styles from './BookFilter.module.css'

interface BookFilterProps {
  children: React.ReactNode
  genre: Book['genre']
  handleSelectedGenre: (e: React.ChangeEvent<HTMLInputElement>, genre: Book['genre']) => void
}

const BookFilter: React.FC<BookFilterProps> = ({ children, genre, handleSelectedGenre }) => {
  return (
    <figure className={styles.wrapper_book_filter}>
      <div className={styles.book_filter__icon}>
        {children}
        <input type="checkbox" name={genre} id={genre} value={genre} onChange={(e) => handleSelectedGenre(e, genre)} />
      </div>
      <figcaption className={styles.book_filter__text}><span>{genre}</span></figcaption>
    </figure>
  )
}

export default BookFilter