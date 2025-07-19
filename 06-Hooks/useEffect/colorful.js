import React, { useState, useEffect } from 'react'

//re-render-> calling the function again that is why const value is able to change
//variable is getting created again

//setColor('orange)
function Colorful() {
  const [color, setColor] = useState('white')

  console.log('first')

  //useEffect(Callback function,dependency)
  useEffect(() => {
    console.log('useEffect executed')
    document.body.style.backgroundColor = color
  }, [color]) //runs only when color changes hence now that twice rendering problem solved

  //useEffect hook runs at last of the function

  return (
    <>
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
    </>
  )
}

export default React.memo(Colorful)
