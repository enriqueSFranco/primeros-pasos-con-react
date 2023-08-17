import { useEffect, useId, useMemo, useState } from "react"
import api, { PRODUCTS } from '@/api/products'

interface Product {
  id: number
  title: string
  description: string
  price: number
}

enum TYPE_FILTER {
  PRODUCT_NAME = 'NAME',
  PRODUCT_PRICE = 'PRICE'
}

// TODO: IMPLEMTARLO EN UN UTIL
function numberFormat (value: number): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }
  const nf: Intl.NumberFormat = new Intl.NumberFormat('es-MX', options)
  return nf.format(value)
}

// TODO: IMPLEMNTAR UN CUSTOM HOOK
function useProducts ({ query }: { query: string }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS)
  const [loading, updateLoading] = useState<boolean>(false)

  useEffect(() => {
    const getData = async (query: string) => {
      try {
        updateLoading(true)
        const data = await api.search(query)
        setProducts(data)
      } catch (error) {
        throw new Error("Oppps, ha ocurrido un error.");
      } finally {
        updateLoading(false)
      }
    }
    getData(query)
  }, [query])
  return { products, loading }
}

interface ProductProps {
  product: Product
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const className = product.price <= 100 ? 'sale' : ''
  return (
    <article className={`product ${className}`}>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <span>{numberFormat(product.price)}</span>
    </article>
  )
}

function Loader () {
  return (
    <div>
      <h1>cargando...</h1>
    </div>
  )
}

interface ProductListProps {
  products: Product[]
  loading: boolean
}
const ProductList: React.FC<ProductListProps> = ({ products, loading }) => {
  if (loading) return <Loader />

  return (
    <ul className="product-list">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product product={product} />
          </li>
        )
      })}
    </ul>
  )
}

const InterviewThree = () => {
  const [query, setQuery] = useState<string>(() => {
    const storeQuery = window.localStorage.getItem('query')
    if (storeQuery != null) {
      return storeQuery
    }
    return ""
  })
  const [filter, updateFilter] = useState(() => {
    const orderPreference = window.localStorage.getItem('order-preference')
    if (orderPreference != null) return orderPreference
    return ""
  })
  const productSelectedHintId = useId()
  const { products, loading } = useProducts({ query })

  function handleChangeQuery (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { value } = e.target
    setQuery(value)
    window.localStorage.setItem('query', value)
  }

  function handleChangeFilterSelect (e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()
    const { value } = e.target
    updateFilter(value)
    window.localStorage.setItem('order-preference', value)
  }

  const matched = useMemo(() => ({ filterName }: { filterName: string }): Product[] => {
    if (filterName === TYPE_FILTER.PRODUCT_NAME) {
      const newProducts = products.toSorted((a, b) => a.title.localeCompare(b.title, 'es'))
      return newProducts
    } else if (filterName === TYPE_FILTER.PRODUCT_PRICE) {
      const newProducts = products.toSorted((a, b) => a.price - b.price)
      return newProducts
    }
    return products
  }, [products])

  return (
    <section>
      <h1>Tienda digitaloncy</h1>
      <form>
        <input
          name="text"
          placeholder="tv"
          type="text"
          value={query}
          onChange={handleChangeQuery}
        />
        <select
          name="product-selected"
          id={productSelectedHintId}
          value={filter}
          onChange={handleChangeFilterSelect}
        >
          <option value={TYPE_FILTER.PRODUCT_NAME}>Nombre</option>
          <option value={TYPE_FILTER.PRODUCT_PRICE}>Precio</option>
        </select>
      </form>
      <ProductList products={matched({ filterName: filter })} loading={loading} />

      <h1>Productos recomendados</h1>
      <ul>
        {[...products]
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .slice(0, 2)
          .map((product) => (
            <li key={product.id}>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <span>$ {product.price}</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default InterviewThree