import { useState } from "react"

function App() {

  const [counter , setCounter] = useState(0)


  const addValue = () => {
    if(counter >= 20){
      alert("Value should be between 0-20")
    } else{
      setCounter(counter+1)
    }
  }

  const decValue = () => {
    if(counter <= 0){
      alert("Value should be between 0-20")
    } else{
      setCounter(counter-1)
    }
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br/>
    <button onClick={decValue}>Decrease Value {counter}</button>
    <br/>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App