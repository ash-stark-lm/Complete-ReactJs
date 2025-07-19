import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function PasswordGeneartor() {
  const [password, setPassword] = useState('ABCD')
  const [length, setLength] = useState(4)

  const [numChanged, setNumChanged] = useState(false)
  const [charChanged, setCharChanged] = useState(false)

  function generatePassword() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numChanged) str += '0123456789'
    if (charChanged) str += '!@#$%^&*()_+[]{}|;:,.<>?'
    let pass = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass) //infinite loop is happening because every time we change the password it re-renders the component
    //so use useEffect to handle this
  }
  /*
  useEffect(() => {
    generatePassword()
  }, [])*/ //only once it will run
  useEffect(() => {
    generatePassword()
  }, [length, numChanged, charChanged]) //runs only when length, numChanged or charChanged changes
  return (
    <>
      <div className="first">
        <h1>Password Generator</h1>
        <div className="container">
          <h2>{password}</h2>

          <div className="controls">
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length is : {length}</label>
            <input
              type="checkbox"
              defaultChecked={numChanged}
              onChange={(e) => setNumChanged(!numChanged)}
            />
            <label>Number</label>

            <input
              type="checkbox"
              defaultChecked={charChanged}
              onChange={(e) => setCharChanged(!charChanged)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<PasswordGeneartor />)

//curent problem is that even if one state changes this will re-render everything meaning memory allocation will be done again
//memory allocation will be done for generatePassword function  again we dont want it

//Here comes useCallback
//useCallback is used to memoize the function so that it does not get recreated on every render
//useCallback takes two arguments, the first is the function to be memoized and the second is an array of dependencies
//if the dependencies change, the function will be recreated, otherwise it will return the same function reference
//useCallback is used to optimize performance by preventing unnecessary re-renders
