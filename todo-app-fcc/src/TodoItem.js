import React from "react"
import "./style.css"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input onChange={() => props.handleChange(props.item.id)} type="checkbox" checked={props.item.completed} />
            <p style={{ textDecoration: props.item.completed && 'line-through' }}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem