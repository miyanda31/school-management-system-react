import './App.css';


function Header({blogs,deleteBlog}) {

  var times = 20;



    return (
      <div className="App">
         <h1>Hello React {times} Lessons</h1>
        {blogs.map((blog)=> <div className='name' key={blog.id}>
          <p>{blog.title} </p>
          <br/>
          <button onClick={()=> deleteBlog(blog.id)}>delete</button>
        </div>)}
      </div>
    );
  }
  
  export default Header;