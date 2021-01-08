import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
  const [checked, toggle] = useReducer(checked => !checked, false)

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
