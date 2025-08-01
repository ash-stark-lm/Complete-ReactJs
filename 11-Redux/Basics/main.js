import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Store from './Store'
import App from './App'
import First from './first'

function Main() {
  return (
    <>
      <Provider store={Store}>
        <App />
        <First />
      </Provider>
    </>
  )
}
import First from './first'

const root = createRoot(document.getElementById('root'))
root.render(<Main />)
