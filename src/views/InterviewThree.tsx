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
  const debouncedValue = useDebounce(query, 500)

  useEffect(() => {
    const getData = async () => {
      try {
        updateLoading(true)
        const data = await api.search(debouncedValue)
        setProducts(data)
      } catch (error) {
        throw new Error("Oppps, ha ocurrido un error.");
      } finally {
        updateLoading(false)
      }
    }
    getData()
  }, [debouncedValue])

  return { products, loading }
}

function useDebounce<T> (value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => clearTimeout(timer)
  }, [value, delay])
  return debouncedValue
}

interface ProductProps {
  product: Product
  isFavorite?: boolean
  handleAddFav?: (productId: Product['id']) => void
}
const Product: React.FC<ProductProps> = ({ product, isFavorite = false, handleAddFav = () => { } }) => {
  const className = product.price <= 100 ? 'sale' : ''
  const classNameFav = isFavorite ? 'fav' : ''
  return (
    <article onClick={() => handleAddFav(product.id)} className={`product ${className} ${classNameFav}`}>
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
  const [productsWithFavoriteKey, updatedProductsWithFavoriteKey] = useState(() => {
    const favoritesStore = window.localStorage.getItem('favorites')
    if (favoritesStore != null) return JSON.parse(favoritesStore)
    return products.map(product => ({ ...product, favorite: false }))
  }
  )

  if (loading) return <Loader />

  function handleAddFav (productId: Product['id']) {
    updatedProductsWithFavoriteKey(prevProducts => {
      const updatedProducts = prevProducts.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            favorite: !product.favorite
          }
        }
        return product
      })
      window.localStorage.setItem('favorites', JSON.stringify(updatedProducts))
      return updatedProducts
    })
  }

  return (
    <ul className="product-list">
      {productsWithFavoriteKey.map((product) => {
        return (
          <li key={product.id}>
            <Product
              product={product}
              isFavorite={product.favorite}
              handleAddFav={handleAddFav}
            />
          </li>
        )
      })}
    </ul>
  )
}

function Recommended () {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.search().then(setProducts)
  }, [])

  const twoProductsRandom = useMemo(() => {
    return [...products]
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, 2)
  }, [products])

  return (
    <>
      <h1>Productos recomendados</h1>
      <ul className="product-list">
        {twoProductsRandom
          .map((product) => (
            <li key={product.id}>
              <Product
                product={product}
              />
            </li>
          ))}
      </ul>
    </>
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
    const sortingStrategies: Record<string, (a: Product, b: Product) => number> = {
      [TYPE_FILTER.PRODUCT_NAME]: (a: Product, b: Product) => a.title.localeCompare(b.title, 'es'),
      [TYPE_FILTER.PRODUCT_PRICE]: (a: Product, b: Product) => a.price - b.price
    }

    const sortFunction = sortingStrategies[filterName]

    if (filterName === TYPE_FILTER.PRODUCT_NAME || filterName === TYPE_FILTER.PRODUCT_PRICE) {
      return products.toSorted(sortFunction)
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
      <Recommended />
    </section>
  );
}

export default InterviewThree