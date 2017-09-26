import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './postReducers'
import { combineEpics } from 'redux-observable'
import fetchPostsEpic from './postEpic'

export const rootReducer = combineReducers({
  posts,
  routing: routerReducer
})

export const rootEpic = combineEpics(
  fetchPostsEpic
)
