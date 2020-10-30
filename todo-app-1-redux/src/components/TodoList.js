import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodoCompleteAction, deleteTodoAction } from '../actions/todosAction'

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = todoId => dispatch(toggleTodoCompleteAction(todoId))
    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))
    return (
        <ul className="todo-list">

            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <h1>{console.log(todo)}</h1>
                        <input type="checkbox" checked={todo.complete} onChange={toggleTodo.bind(null, todo.id)} />
                        <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                        <span className="delete-button" onClick={deleteTodo.bind(null, todo.id)}>X</span>
                    </li>
                ))
            }
        </ul>
    )
}
