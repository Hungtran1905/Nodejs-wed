import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1, age: 24
    },
    {
      id: 2, age: 25
    }
  ])
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew />
      <TodoData
        todoList={todoList} />
      <div className="todo-img">
        <img src={reactLogo} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App
