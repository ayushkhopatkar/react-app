import React, { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      alert("Counter cannot be greater than 20");
      return;
    }
    setCounter(counter + 1);
    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot be less than zero");
    }
    
  }

  return (
    <>
      <h1>Counter Basic</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button  onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
