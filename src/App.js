
import './App.css';
import Header from './Header';
import { useState,useEffect } from 'react';

function App() {

  var [blogs,setBlogs] = useState([{
    title: "named title",
    id:1
  },
  {
    title: "another title",
    id:2
  }
]);

  const  deleteBlog = (id) => {
      var newBlogs = blogs.splice(1,id) ;
      setBlogs(newBlogs);
  };

  useEffect(()=>{
    console.log("use effect");
    
  },[])

  return (
    <div className="App">
        <Header blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
