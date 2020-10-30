import { ADD_POST, FETCH_POSTS } from '../actions/types'

export const addPostAction = post => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: ADD_POST,
            payload: post
        }))
}

export const fetchPostsAction = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}