import { type Book } from "@/shared/types.d"
import styles from './BookFilter.module.css'

interface BookFilterProps {
  children: React.ReactNode
  genre: Book['genre']
  handleSelectedGenre: ({ genre }: { genre: Book['genre'] }) => void
}

const BookFilter: React.FC<BookFilterProps> = ({ children, genre, handleSelectedGenre }) => {
  return (
    <figure className={styles.wrapper_book_filter}>
      <div className={styles.book_filter__icon}>
        {children}
        <input type="radio" name={genre} id={genre} value={genre} onChange={() => handleSelectedGenre({ genre })} />
      </div>
      <figcaption className={styles.book_filter__text}><span>{genre}</span></figcaption>
    </figure>
  )
}

export default BookFilter