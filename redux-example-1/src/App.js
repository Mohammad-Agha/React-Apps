import React from 'react'
import { Provider } from 'react-redux'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  )
}
