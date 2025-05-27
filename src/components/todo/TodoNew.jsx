import { useState } from "react"
import { notification } from "antd"

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("")
  const { addNewTodo } = props
  const handleOnchange = (name) => {
    setValueInput(name)
  }
  const handleOnclick = () => {
    const trimmedValue = valueInput.trim();
    if (trimmedValue === "") {
      notification.error({
        message: "Ô input không được để trống",
        description: "Vui lòng nhập nội dung công việc trước khi thêm.",
      });
      return;
    }
    addNewTodo(trimmedValue)
    setValueInput("")
  }
  return (
    <div className="todo-new">
      <input onChange={(event) => handleOnchange(event.target.value)}
        required
        type="text" className="text"
        placeholder="Enter your task"
        value={valueInput} />
      <button onClick={handleOnclick}>Add</button>
    </div>
  )
}
export default TodoNew