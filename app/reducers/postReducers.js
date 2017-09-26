import {
  CREATE_POST,
  DELETE_POST,
  CHANGE_POST,
  RECEIVE_POSTS
} from '../constants/actionTypes'

const post = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        id: action.id,
        title: action.title,
        author: action.author,
        content: action.content
      }
    case CHANGE_POST:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        title: action.title,
        author: action.author,
        content: action.content
      })
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [
        ...state,
        post(undefined, action)
      ]
    case DELETE_POST:
      const idx = action.index
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    case CHANGE_POST:
      return state.map(p => post(p, action))
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}

export default posts
