import React from 'react'
import { Increment, Decrement } from './Slice2'
import { useSelector, useDispatch } from 'react-redux'

function First() {
  const count = useSelector((state) => state.slice2.count)
  const dispatch = useDispatch()
  console.log(Increment())

  return (
    <div className="first">
      <h1>Count is {count}</h1>
      <div className="btns">
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default First
