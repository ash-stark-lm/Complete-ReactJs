import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

//re-render-> calling the function again that is why const value is able to change
//variable is getting created again

//setColor('orange)
function Main() {
  const [color, setColor] = useState('white')
  const [count, setCount] = useState(0)
  console.log('render') //everything is rendered twice

  //now we want that it runs only once and if color not changes it doesn't chnage see next file
  document.body.style.backgroundColor = color

  return (
    <>
      <div className="first">
        <h1>Background Color Changer</h1>
        <div className="btn">
          <button
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: 'orange' }}
            onClick={() => setColor('orange')}
          >
            Orange
          </button>
          <button
            style={{ backgroundColor: 'pink' }}
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
          <button
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
        </div>

        <div className="counter">
          <h2> Count is :{count}</h2>
          <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Main />)
