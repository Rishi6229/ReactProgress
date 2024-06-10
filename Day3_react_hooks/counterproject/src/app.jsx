import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  let [counter , setCounter] = useState(15)
  //let counter = 5;

  const addValue = ()=>{
    //counter += 1;
    setCounter(counter + 1);
  }

  // const removeValue =()=>{
  //   setCounter(counter - 1);
  // }

  return (
    <>
      <h1>Chai aur react!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      {/* <button onClick={removeValue()}>Remove Value</button> */}
    </>
  )
}
