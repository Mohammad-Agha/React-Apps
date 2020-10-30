import React from 'react'
import { Provider } from 'react-redux'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { store } from './store'
import './App.css'

export default function App() {
    return (
        <Provider store={store}>
            <div className="main">
                <TodoInput />
                <TodoList />
            </div>
        </Provider>
    )
}