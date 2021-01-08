import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export const TreesContext = createContext()

const trees = [
  { id: 1, type: 'a' },
  { id: 2, type: 'b' },
  { id: 3, type: 'c' },
  { id: 4, type: 'd' },
]

const App = () => {
  return (
    <>
      <h1>Trees</h1>
    </>
  )
}

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root'),
)
