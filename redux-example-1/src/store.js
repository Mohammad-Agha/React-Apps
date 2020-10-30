import { createStore, applyMiddleware, compose } from 'redux'
import postsReducer from './reducers/postsReducer'
import thunk from 'redux-thunk'
const initialState = {
    posts: []
}

const middleware = [thunk]

export const store = createStore(
    postsReducer,
    initialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)