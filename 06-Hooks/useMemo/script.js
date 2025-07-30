import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useMemo, useEffect } from 'react'

//useMemo is used to memoize the function so that it does not get recreated on every render
//useMemo takes two arguments, the first is the function to be memoized and the second is an array of dependencies
//if the dependencies change, the function will be recreated, otherwise it will return the same function reference
//useMemo is used to optimize performance by preventing unnecessary re-renders
function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState('')
  // const [res, setRes] = useState('')

  /*
  time complexity-> o(n)
  function fibonacci(n) {
    if (n <= 1) return n
    const dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
  }
  */

  //time complexity -> 2^n
  //expensive calculation

  //this function will get created again and again so we can use useCalllBack
  //this fn is not dependent on any state we can also make it global or use useacllback
  /*
  function fibonacci(n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const fibonnaci =useCallback((n) => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
  },[])
  
  */

  //now the problem is let say calulcated fibonacci of 40 => exopensive now we are changing counter the whole page will re-render thus fibonacci will again caluclate even though number didnt changed expensive
  //useMemo is used to memoize the function so that it does not get recreated on every render
  //=> we can solve it using useEffect also but useMemo has a slight advantage
  //callback function-> dependecny chnage then it will run
  const result = useMemo(() => fibonacci(number), [number])

  /*
  useEffect(() => {
    setRes(fibonacci(number))
  }, [number])
  */

  //now why not useEffect=>last mai chalta hai and will  have 1 extra rendering
  return (
    <>
      <h1> Counter is :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <div>
        <h2>Fibonnaci Number is :{result}</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
