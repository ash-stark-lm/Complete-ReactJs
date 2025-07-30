import React from 'react'
import Nested from './Nested'
import { Link, Outlet } from 'react-router'
export default function About() {
  return (
    <div>
      <nav>
        <Link to="nested">Nested</Link>
        <Link to="nested2">Nested2</Link>
      </nav>
      <h1>About</h1>

      <Outlet />
    </div>
  )
}
