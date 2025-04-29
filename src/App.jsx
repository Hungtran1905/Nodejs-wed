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
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }
    setTodoList([...todoList, newTodo])

  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData
        todoList={todoList} />
      <div className="todo-img">
        <img src={reactLogo} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App
