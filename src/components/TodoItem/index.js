// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoItems, deleteTodo} = props
  const {title, id} = TodoItems

  const onDelete = () => {
    console.log(`onDelete ${id}`)
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-item-para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
