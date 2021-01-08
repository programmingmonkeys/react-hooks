import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const [fir, , thi] = ['mon', 'tues', 'wed']
console.log(fir)
console.log(thi)

ReactDOM.render(
  <React.StrictMode>
    <App name="Foo" />
  </React.StrictMode>,
  document.getElementById('root'),
)
