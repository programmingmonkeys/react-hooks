import React from 'react'
import './App.css'
import { useTrees } from './'

const App = () => {
  const { trees } = useTrees()

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
