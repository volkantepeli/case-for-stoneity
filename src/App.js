import './App.css';
import useStoneitySortHook from './useStoneitySortHook';
import React, { useEffect, useState } from 'react';


function App() {
  const {sortedList, addNewNumber} = useStoneitySortHook([4, 13, 8, 9, 7, 1, 6])
  const [number, setNumber] = useState(0);
  
  const handleChange = event => {
    setNumber(event.target.value);
  };
  const handleClick = event => {
    event.preventDefault();
    if(number === ""){
      alert("Input is empty")
    }else{
    addNewNumber(Number(number));}
  };

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <input
        type="text"
        id="message"
        name="message"
        value={number}
        onChange={handleChange}
        autoComplete="off"
      />
      <button className='btn' onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
