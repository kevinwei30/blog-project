import { createAction } from 'redux-actions'
import {
  CREATE_POST,
  DELETE_POST,
  CHANGE_POST,
  INIT_POST
} from '../constants/actionTypes'

export const createPost = createAction('CREATE_POST')
export const deletePost = createAction('DELETE_POST')
export const changePost = createAction('CHANGE_POST')
export const initPost = createAction('INIT_POST')
