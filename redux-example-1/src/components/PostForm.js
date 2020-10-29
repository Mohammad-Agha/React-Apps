import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

function PostForm(props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  function onChange(event) {
    event.target.name === 'title' && setTitle(event.target.value)
    event.target.name === 'body' && setBody(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    const newPost = {
      title,
      body
    }
   
    props.createPost(newPost)

  }
  
  return (
    <div>
      <h1>App post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label><br />
          <input name="title" type="text" onChange={onChange} value={title}/>
        </div>
        <div>
          <label>Body: </label><br />
          <textarea name="body" onChange={onChange} value={body}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default connect(null, { createPost })(PostForm)