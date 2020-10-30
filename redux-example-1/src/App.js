import React from 'react'
import { Provider } from 'react-redux'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import { store } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  )
}
