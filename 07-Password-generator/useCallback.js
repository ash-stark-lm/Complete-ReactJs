//Here comes useCallback
//useCallback is used to memoize the function so that it does not get recreated on every render
//useCallback takes two arguments, the first is the function to be memoized and the second is an array of dependencies
//if the dependencies change, the function will be recreated, otherwise it will return the same function reference
//useCallback is used to optimize performance by preventing unnecessary re-renders

import React, { useCallback, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

//setPassword,setLength,setNumChanged,setCharChanged  these fns are just created once and store its refernce
//Now

function PasswordGeneartor() {
  const [password, setPassword] = useState('ABCD')
  const [length, setLength] = useState(4)

  const [numChanged, setNumChanged] = useState(false)
  const [charChanged, setCharChanged] = useState(false)

  const generatePassword = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numChanged) str += '0123456789'
    if (charChanged) str += '!@#$%^&*()_+[]{}|;:,.<>?'
    let pass = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass)
  }, [length, numChanged, charChanged]) //useCallback will return the same function reference unless length, numChanged or charChanged changes

  useEffect(() => {
    generatePassword()
  }, [generatePassword])
  //same as doing [length, numChanged, charChanged] in the dependency array of useEffect as
  // generatePassword will change only if length or numChanged or charChanged changes
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
