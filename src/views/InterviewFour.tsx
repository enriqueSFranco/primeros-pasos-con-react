import { useEffect, useState } from "react"
import api from "@/api/items"

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

type Form = HTMLFormElement

const useTask = () => {
  const [items, setItems] = useState<Item[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.list()
      .then((response) => {
        setItems(response)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  function handleAddTask (e: React.FormEvent<Form>) {
    e.preventDefault()
    const $form = e.target as Form
    const field = new FormData($form)
    const text = field.get('text') as string

    if (text.trim().length > 0) {
      const newTask: Item = {
        id: +new Date(),
        text,
        completed: false
      }
      const updatedItems = items ? [...items, newTask] : [newTask]
      setItems(updatedItems)
      $form.reset()
    }
  }

  function handleRemoveTask (itemId: Item['id']) {
    if (items === null) return
    const updatedItems = [...items].filter(item => item.id !== itemId)
    setItems(updatedItems)
  }

  function handleToggle (id: Item["id"]) {
    // Should implement
    setItems(prevItems => {
      if (!prevItems) return null

      const updatedItems = prevItems?.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else return item
      })
      return updatedItems
    })
  }

  return { items, loading, handleAddTask, handleToggle, handleRemoveTask }
}

const InterviewFour = () => {
  const { items, loading, handleAddTask, handleRemoveTask, handleToggle } = useTask()

  return (
    <main className="wrapper-interview_four">
      <h1>Supermarket list</h1>
      <form onSubmit={handleAddTask}>
        <input name="text" type="text" autoFocus />
        <button>Add</button>
      </form>
      {loading ? (<p>cargando</p>) : (
        <ul className="task-list">
          {items && items.map((item) => (
            <li key={`item-${item.id}`} className={item.completed ? "completed" : ""}>
              <article onClick={() => handleToggle(item.id)} className="task">
                <p>{item.text} </p>
                <button onClick={() => handleRemoveTask(item.id)}>[X]</button>
              </article>
            </li>
          ))}
        </ul>
      )}

    </main>
  )
}

export default InterviewFour