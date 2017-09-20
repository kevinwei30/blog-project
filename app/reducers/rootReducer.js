import { combineReducers } from 'redux'
// import ui from './ui/uiReducers'
import post from './data/postReducers'

const rootReducer = combineReducers({
  post
})

export default rootReducer
