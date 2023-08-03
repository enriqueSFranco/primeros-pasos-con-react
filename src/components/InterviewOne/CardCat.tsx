import styles from "./CardCat.module.css"

interface CardCatProps {
  baseUrl: string
  cat: string
  fact: string
  loading: boolean
}

const CardCat: React.FC<CardCatProps> = ({ baseUrl, cat, fact, loading }) => {
  return (
    <figure className={styles.card}>
      <img src={`${baseUrl}/${cat}&width=100&height=100`} alt={`cat-${fact}`} />
      <figcaption className={styles.footer_card}>
        {loading ? (<div>cargado fact</div>) : (<p>{fact}</p>)}
      </figcaption>
    </figure>
  )
}

export default CardCat