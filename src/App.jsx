import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"


const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // {
    //   id: 1, name: "Learning Java"
    // },
    // {
    //   id: 2, name: "Learning React"
    // }
  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }
    setTodoList([...todoList, newTodo])

  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id != id)
    setTodoList(newTodo)
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className="todo-img">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      }
    </div>
  )
}
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
