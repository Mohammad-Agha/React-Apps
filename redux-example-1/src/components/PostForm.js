import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addPostAction } from '../actions/postActions'

export default function PostForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()
    const addPost = post => dispatch(addPostAction(post))

    function onSubmit(event) {
        event.preventDefault()
        const newPost = { title, body }
        addPost(newPost)
    }

    function onChange(event) {
        event.preventDefault()
        event.target.name === 'title' && setTitle(event.target.value)
        event.target.name === 'body' && setBody(event.target.value)
    }
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        onChange={onChange}
                        value={title}
                    />
                </div>
                <br />
                <div>
                    <label>Body: </label>
                    <br />
                    <textarea
                        name="body"
                        onChange={onChange}
                        value={body}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
