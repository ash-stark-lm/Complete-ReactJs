import React from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router'
import { Link } from 'react-router'
import App from './App'
import About from './AboutPage'
import Contact from './Contact'
import Nested from './Nested.js'
import Nested2 from './Nested2.js'
import Zero from './Zero.js'
function Main() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />}>
          <Route index element={<Zero />} />
          <Route path="nested" element={<Nested />} />
          <Route path="nested2" element={<Nested2 />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Main />)
