const TodoData = (props) => {
  const { todoList } = props
  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
          <div className={`todo-item`} key={item.id}>
            <div className="data-name">{item.name}</div>
            <button className="del">Delete</button>

          </div>)
      })}
    </div>
  )
}
export default TodoData