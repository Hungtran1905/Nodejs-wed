import { useState } from "react"

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("")
  const { addNewTodo } = props
  const handleOnchange = (name) => {
    setValueInput(name)
  }
  const handleOnclick = () => {
    addNewTodo(valueInput)
    setValueInput("")
  }
  return (
    <div className="todo-new">
      <input onChange={(event) => handleOnchange(event.target.value)} type="text" className="text" placeholder="Enter your task"
        value={valueInput} />
      <button onClick={handleOnclick}>Add</button>
    </div>
  )
}
export default TodoNew