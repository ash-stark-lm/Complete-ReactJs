import React from 'react'
import Second from './second'
import { useContext } from 'react'
import GlobalContext from './GlobalContext'
function First() {
  const { count, setCount } = useContext(GlobalContext)

  return (
    <div>
      <h1>First :{count} </h1>
      <Second />
    </div>
  )
}
export default First
