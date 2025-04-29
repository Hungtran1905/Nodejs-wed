const TodoNew = () => {
  const handleOnchange = (name) => {
    console.log(name)
  }
  const handleOnclick = () => {
    alert("Click me")
  }
  return (
    <div className="todo-new">
      <input onChange={(event) => handleOnchange(event.target.value)} type="text" className="text" placeholder="Enter your task" />
      <button onClick={handleOnclick}>Add</button>
    </div>
  )
}
export default TodoNew