import React, { useContext } from 'react'
import './App.css'

import { TreesContext } from './'

const App = () => {
  const { trees } = useContext(TreesContext)

  return (
    <>
      <h1>Trees</h1>
      <ul>
        {trees.map(tree => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </>
  )
}

export default App
