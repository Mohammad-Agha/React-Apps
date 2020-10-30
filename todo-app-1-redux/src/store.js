import { createStore } from 'redux'
import uuid from 'uuid/dist/v4'
import todosReducer from './reducers/todosReducer'

const initialState = {
    todos: [
        {
            id: uuid(),
            name: 'I am the first initiative',
            complete: true
        },
        {
            id: uuid(),
            name: 'I am the second initiative',
            complete: false
        }
    ]
}

export const store = createStore(
    todosReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

