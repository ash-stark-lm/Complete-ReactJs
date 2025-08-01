import React from 'react'
import { Increment, Decrement, CustomIncreaser } from './Slice1'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState('')
  const count = useSelector((state) => state.slice1.count)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(CustomIncreaser(Number(num)))
  }

  console.log(Increment())

  return (
    <div className="first">
      <h1>Count is {count}</h1>
      <div className="btns">
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
        <br />
        <br />
        <br />
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter number"
        />
        <button onClick={handleClick}>Custom</button>
      </div>
    </div>
  )
}

export default App
