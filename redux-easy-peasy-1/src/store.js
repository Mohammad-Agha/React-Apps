import { createStore, action } from 'easy-peasy'

const store = createStore(
  {
    todos: ['hello', 'how are', 'you'],
    addTodo: action((state, todo) => { 
      state.todos.push(todo)
     })
  }
)



export default store