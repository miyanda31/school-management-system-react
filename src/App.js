
import './App.css';
import Header from './Header';
import useFetch from './useFetch';

function App() {

  const {data:blogs} = useFetch('blogs');

  const  deleteBlog = (id) => {
    var newBlogs = blogs.splice(1,id) ;
    // setBlogs(newBlogs);
};



  return (
    <div className="App">
        {blogs && <Header blogs={blogs} deleteBlog={deleteBlog} />}
    </div>
  );
}

export default App;
