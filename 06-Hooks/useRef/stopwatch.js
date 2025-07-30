import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useRef } from 'react'

//useRef-> useRef is used to create a mutable variable that persists across re-renders
function StopWatch() {
  const [time, setTime] = useState(0)
  const intervalRef = useRef(null)
  //need refernce for clear interval
  //or we can use
  //const [isRunning, setIsRunning] = useState(false)

  function start() {
    /* if(!isRunning){
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    })
    setIsRunning(true)
    */

    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }
  function stop() {
    /* if (isRunning) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsRunning(false)
    }*/
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  function reset() {
    clearInterval(intervalRef.current)
    setTime(0)
  }
  return (
    <>
      <div className="stopWatch">
        <h1>StopWatch is :{time}</h1>

        <div className="buttons">
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<StopWatch />)
