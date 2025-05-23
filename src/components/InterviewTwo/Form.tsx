import { useId, useRef } from 'react'
import { useLibrary } from '@/stores/library.store'
import { type Book } from '@/shared/types.d'
import { IconSearch } from '../Icon'
import styles from './Form.module.css'

const Form = () => {
  const queryRef = useRef<HTMLInputElement | null>(null)
  const queryHintId = useId()
  const { filterByTitle } = useLibrary(state => ({ filterByTitle: state.filterByTitle }))

  function resetForm () {
    if (queryRef.current) {
      queryRef.current.value = ''
    }
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const field = new FormData($form)

    const query = field.get('query') as Book['title']

    if (query.trim() !== '') {
      filterByTitle({ title: query })
      resetForm()
    }
  }

  return (
    <div className={styles.wrapper_form}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.wrapper_form__input}>
          <IconSearch />
          <input
            ref={queryRef}
            type='search'
            name='query'
            id={queryHintId}
            placeholder='Harry Potter y la piedra filosofal, El Señor de los Anillos'
          />
        </div>
        <button className={styles.btn_search}>buscar</button>
      </form>
    </div>
  )
}

export default Form