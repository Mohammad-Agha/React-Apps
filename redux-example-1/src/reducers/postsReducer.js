import { ADD_POST, FETCH_POSTS } from '../actions/types'

export default function postsReducer(state, { type, payload }) {
    switch (type) {
        case ADD_POST:
            return { ...state, posts: [payload, ...state.posts] }

        case FETCH_POSTS:
            return {
                ...state,
                posts: payload
            }

        default:
            return state
    }
}