import React, { use, useState } from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'

function Counter() {
  //useState is a hook and returns an array with two elements
  let [cnt, setCnt] = useState(0)
  //setCnt-> a function

  function handleIncrement() {
    setCnt(cnt + 1)
    //setCnt calls the Counter function again
    //and re-renders the component with the new value of cnt
  }
  function handleDecrement() {
    setCnt(cnt - 1)
  }

  let array = [5, 2, 3, 1, 4]
  const [arr, setArr] = useState(array)

  //below would work but instead of modifying original array
  /*function sortArray() {
    arr.sort((a, b) => a - b) 
    //setA(arr)
    setArr((arr) => [...arr])
  }*/

  //doesn't mutate the original array
  //creates a new array with the sorted values
  function sortArray() {
    arr.sort((a, b) => a - b)
    //setA(arr)
    setArr((prev) => [...prev].sort((a, b) => a - b))
  }
  return (
    <div className="first">
      <h1>Count is: {cnt} </h1>
      <div className="btns">
        <button onClick={handleIncrement} className="btn">
          Increment {cnt}
        </button>
        <button onClick={handleDecrement}>Decrement {cnt}</button>
      </div>
      <div>
        <h2>Array: {arr.join(', ')}</h2>
      </div>

      <button onClick={sortArray} className="btn">
        Sort the array
      </button>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Counter />)
