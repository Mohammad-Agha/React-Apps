import React from 'react'
import Main from './components/Main'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAction, decrementAction, changeTextAction } from './actions/action'

const App = () => {
  const counter = useSelector(state => state.num)
  const text = useSelector(state => state.text)
  const dispatch = useDispatch()

  const increment = () => dispatch(incrementAction(1))
  const decrement = () => dispatch(decrementAction(1))
  const onChange = (event) => dispatch(changeTextAction(event.target.value))


  return (
      <div>
        <h1>{counter} {text}</h1>
        <input type="text" value={text} onChange={onChange}/>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <Main />
      </div>
  )
}

export default App