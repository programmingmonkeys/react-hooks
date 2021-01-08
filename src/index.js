import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { FaStar } from 'react-icons/fa'

const createArray = length => [...Array(length)]

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? 'red' : 'grey'} />
}

const StarRating = ({ totalStars = 5 }) => {
  return createArray(totalStars).map((n, i) => <Star key={i} />)
}

const App = () => {
  return (
    <>
      <StarRating totalStars={10} />
      <br />
      <StarRating />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
