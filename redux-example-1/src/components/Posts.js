import React, { useEffect, useState } from 'react'

export default function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  })

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => {
        return <div key={index}>
          <h3>{post.userId} {post.title}</h3>
          <p>{post.body}</p>
        </div>
      })}
    </div>
  )
}
