import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import First from './first'
import GlobalContext from './GlobalContext'
import { useContext } from 'react'

function Main() {
  const [count, setCount] = useState(0)
  const data = useContext(GlobalContext)
  //now how to pass it to all the children
  return (
    <>
      <GlobalContext.Provider value={{ count: count, setCount: setCount }}>
        <h1> Hello Bro : {data}</h1>
        <h1>Counter is {count}</h1>
        <First />
      </GlobalContext.Provider>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Main />)
