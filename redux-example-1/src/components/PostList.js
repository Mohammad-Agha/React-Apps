import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsAction } from '../actions/postActions'


export default function PostList() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const fetchPosts = () => dispatch(fetchPostsAction())

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}
