import React, { useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const App = () => {
  const [text, setText] = useState('')

  const todos = useStoreState(state => state.todos);
  const addTodoAction = useStoreActions(actions => actions.addTodo)


  const onChange = (e) => setText(e.target.value)
  const addTodo = () => addTodoAction(text)

  return (
    <div>
      <input type="text" value={text} onChange={onChange}/>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => <div key={index}>{todo}</div>)} 
    </div>
  )
}

export default App