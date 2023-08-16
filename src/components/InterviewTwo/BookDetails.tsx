import { type Book as BookType } from "@/shared/types.d"

interface BookDetailsProps {
  book: BookType
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <article>
      <figure>
        <img src={book.cover} alt={book.title} />
      </figure>
    </article>
  )
}

export default BookDetails