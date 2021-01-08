import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const initialState = {
  message: 'hi',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_YELL':
      return {
        message: `Hey I just said ${state.message}`,
      }
    case 'ACTION_WHISPER':
      return {
        message: `bah blag booo: ${state.message}`,
      }
    default:
      return {
        message: '',
      }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: 'ACTION_YELL' })}>yell</button>
      <button onClick={() => dispatch({ type: 'ACTION_WHISPER' })}>whisper</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
