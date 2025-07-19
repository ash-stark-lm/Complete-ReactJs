import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Colorful from './colorful'
//re-render-> calling the function again that is why const value is able to change
//variable is getting created again

//setColor('orange)
function Main() {
  const [count, setCount] = useState(0)

  console.log('second')

  return (
    <>
      <div className="first">
        <div className="counter">
          <h2> Count is :{count}</h2>
          <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        </div>
        <Colorful />
      </div>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Main />)

//colorfu->child of main function call udhar v hoga-> console.log('first) dikhega
//we don't want that to happen use React.memo
