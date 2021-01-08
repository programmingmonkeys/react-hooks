import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
  const [status, setStatus] = useState('Not delivered')

  return (
    <div>
      <h1>The package is {status}</h1>
      <button
        onClick={() => {
          setStatus('Delivered')
        }}
      >
        Deliver
      </button>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
