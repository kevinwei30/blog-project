import { handleActions } from 'redux-actions'
import { PostState } from '../../constants/model'

import {
  CREATE_POST,
  DELETE_POST,
  CHANGE_POST,
  INIT_POST
} from '../../constants/actionTypes'

const postReducers = handleActions({
  CREATE_POST: (state, { payload }) => {
    console.log(payload)
    if (state.get('posts').count() > payload) {
      let posts = state.get('posts').set(payload, state.get('post'))
      return state.set('posts', posts)
    } else {
      let posts = state.get('posts').push(state.get('post'))
      return state.set('posts', posts).set('redirectToNewPage', false)
    }
  },
  DELETE_POST: (state, { payload }) => (
    state.set('posts', state.get('posts').splice(payload.index, 1))
  ),
  CHANGE_POST: (state, { payload }) => {
    console.log(payload)
    if (Array.isArray(payload)) {
      return state.merge({ 'post': state.get('post').set(payload[0], payload[1]) })
    } else {
      console.log('@')
      return state.merge({ 'post': payload })
    }
  },
  INIT_POST: (state, { payload }) => {
    return state.set('post', state.get('posts').get(payload))
  }
}, PostState)

export default postReducers
