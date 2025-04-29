import "./style.css"

const MyComponent = () => {
    return (
      // do file .jsx chỉ có thể chứa 1 phần tử html nên sẽ dùng fragment <></> để chứa các phần tử html còn lại thì nó sẽ không có lỗi xảy ra
      <> 
        <div className="hello">Hello World</div>
      </>
    );
  }

  export default MyComponent