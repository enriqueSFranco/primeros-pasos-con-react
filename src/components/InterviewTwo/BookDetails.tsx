import Book from "./Book"

interface BookDetailsProps {
  title: Book['title']
}

const BookDetails: React.FC<BookDetailsProps> = ({ title }) => {
  return (
    <div>{title}</div>
  )
}

export default BookDetails