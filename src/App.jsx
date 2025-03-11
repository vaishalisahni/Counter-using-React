import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter=15;
  let [counter,setCounter]=useState(15);
  const addValue=()=>{
    // console.log("Value Added",counter);
    if(counter<20)
    setCounter(counter+1);
  }
  const removeValue=()=>{
    // console.log(counter);
    if(counter>0)
    setCounter(counter-1);
  }
  return (
    <div className='counter-container'>
      <h1>Counter</h1>
      <h2 className='counter-value'>Counter Value: {counter}</h2>

      <div className='btn-container'>
      <button
      onClick={addValue} className='btn add'>Add value</button>
      <br />
      <button
      onClick={removeValue} className='btn remove'>Remove value</button>
      </div>
    </div>
  )
}

export default App
