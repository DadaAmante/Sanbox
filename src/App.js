import { useState } from 'react';
import caretIcon from "../src/assets/caret.png";
import zeroIcon from "../src/assets/zero.png";
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1)
  }
  function handleSub() {
    setCount(count - 1)
  }
  function handleReset() {
    setCount(0)
  }

  return (
    <div className="App">
      <div className='container'>
        <button onClick={handleSub}>
          <img className='iconButton' src={caretIcon} alt="Subtract" />
        </button>
        <div className='counterContainer'>
          <p>{count}</p>
        </div>
        <button onClick={handleAdd}>
          <img className='iconButton flip' src={caretIcon} alt="Add" />
        </button>
      </div>
      <div className='reset-container'>
        <button onClick={handleReset}>
          <img className='iconButton' src={zeroIcon} alt="Reset" />
        </button>
      </div>
    </div>
  );
}

export default App;
