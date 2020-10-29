import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchPosts} from '../actions/postActions'

function Posts(props) {
  useEffect(() => {
    console.log('fetch posts');
    props.fetchPosts()
  }, [])
  
  const isFirstRun = useRef(true);
  useEffect (() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    console.log('Add post');
    props.posts.unshift(props.newPost)
  }, [props.newPost]);

  return (
    
    <div>
      <h1>{console.log('render is called')}</h1>
      <h1>Posts</h1>
      {props.posts.map((post, index) => {
        return <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  }
}


export default connect(mapStateToProps, { fetchPosts })(Posts)