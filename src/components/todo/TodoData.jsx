const TodoData = (props) => {
  const { todoList, deleteTodo } = props

  const handleClick = (id) => {
    deleteTodo(id)
  }
  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
          <div className={`todo-item`} key={item.id}>
            <div className="data-name">{item.name}</div>
            <button onClick={() => handleClick(item.id)} className="del">Delete</button>

          </div>)
      })}
    </div>
  )
}
export default TodoData