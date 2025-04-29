import "./style.css"

const MyComponent = () => {
  const age = 24
    return (
      // do file .jsx chỉ có thể chứa 1 phần tử html nên sẽ dùng fragment <></> để chứa các phần tử html còn lại thì nó sẽ không có lỗi xảy ra
      <> 
        <div className="hello">Hello World</div>
        <div style={{color:"green"}}>Hello React</div>
        <div>I am {age}</div>
        <div>{console.log("xin chao")}</div>
      </>
    );
  }

  export default MyComponent