import { useState } from "react"

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("Hung")
  const { addNewTodo } = props
  const handleOnchange = (name) => {
    setValueInput(name)
  }
  const handleOnclick = () => {
    addNewTodo(valueInput)
  }
  return (
    <div className="todo-new">
      <input onChange={(event) => handleOnchange(event.target.value)} type="text" className="text" placeholder="Enter your task" />
      <button onClick={handleOnclick}>Add</button>
    </div>
  )
}
export default TodoNew