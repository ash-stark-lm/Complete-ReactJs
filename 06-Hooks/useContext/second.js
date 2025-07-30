import React from 'react'
import GlobalContext from './GlobalContext'
import { useContext } from 'react'
function Second() {
  const { count, setCount } = useContext(GlobalContext)

  return (
    <div>
      <h1>How was your day :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Second
