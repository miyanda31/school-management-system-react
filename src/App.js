
import './App.css';
import Header from './Header';

function App() {
  const lin = '#';
  const haveBeenClicked = (evt,title)=>{
    console.log(title);
    console.log(evt);
  }

  return (
    <div className="App">
        <Header/>
        <a href={lin} onClick={(evt)=>haveBeenClicked(evt,"Not so cool")} >Click Me</a>
    </div>
  );
}

export default App;
