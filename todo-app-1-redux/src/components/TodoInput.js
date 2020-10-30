import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import uuid from 'uuid/dist/v4'
import { addTodoAction } from '../actions/todosAction'


export default function TodoInput() {
    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()
    const addTodo = todo => dispatch(addTodoAction(todo))

    function onSubmit(event) {
        event.preventDefault()
        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        })
        setTodo('')
    }

    function onChange(event) {
        event.preventDefault()
        setTodo(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-div">
                <input
                    type="text"
                    name="todo"
                    placeholder="Add todo"
                    value={todo}
                    onChange={onChange}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    )
}
