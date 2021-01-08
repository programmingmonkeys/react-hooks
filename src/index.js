import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const TreesContext = createContext()

export const useTrees = () => useContext(TreesContext)

const trees = [
  { id: 1, type: 'a' },
  { id: 2, type: 'b' },
  { id: 3, type: 'c' },
  { id: 4, type: 'd' },
]

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root'),
)
