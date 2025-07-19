import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'

function Counter() {
  let cnt = 0

  function handleIncrement() {
    cnt += 1
    console.log(cnt)
    //React does not re-render automatically when a variable changes
    //To re-render, we need to use state or force an update
    //We are  manipulating Dom myself here but react tells us not to do this
    //React do this automatically the DOM manipulation
    //So, this is not a good practice
    document.querySelector('h1').innerText = `Count is: ${cnt}`
  }
  function handleDecrement() {
    cnt -= 1
    console.log(cnt)
    document.querySelector('h1').innerText = `Count is: ${cnt}`
  }
  //here in buttons value is not changing we need do that query selector again
  return (
    <div className="first">
      <h1>Count is: {cnt} </h1>

      <div className="btns">
        <button onClick={handleIncrement} className="btn">
          Increment {cnt}
        </button>

        <button onClick={handleDecrement}>Decrement {cnt}</button>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Counter />)

//Now that is why we use useState hook in react
//to manage state in functional components
