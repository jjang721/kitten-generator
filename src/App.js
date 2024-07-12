import './App.css';
import { useState} from 'react';
import Cat from './components/cat.js';

function App() {

  const [cats, setCats] = useState([]);

  const addCat = () => {
    setCats([...cats, <Cat key={cats.length}/>]);
  };

  return (
    <div className="App">
    <button onClick={addCat} className='button' role='button'>Add kitty</button>
    <div className="cat-container">
      {cats}
    </div>
  </div>
  );
}

export default App;
