import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useRef } from 'react'

//useRef-> useRef is used to create a mutable variable that persists across re-renders
function Main() {
  const [count, setCount] = useState(0)
  //let money = 0
  const money = useRef(0) //re render nahi krta
  console.log(money)

  return (
    <>
      <h1>Counter is :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Money is : {money.current}</h1>

      <button
        onClick={() => {
          money.current += 1
          console.log(money.current)
          //see when counter value change money reset to 0 but we want it to remain persist across re render
          //we use useRef
        }}
      >
        Increment
      </button>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Main />)
