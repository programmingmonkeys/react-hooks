import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(setData)
  }, [])

  if (data) {
    return (
      <div>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <btton onClick={() => setData([])}></btton>
      </div>
    )
  }

  return <p>no users</p>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
