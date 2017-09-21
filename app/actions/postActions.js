import {
  CREATE_POST,
  DELETE_POST,
  CHANGE_POST
} from '../constants/actionTypes'

let nextPostId = 0
export const createPost = (title, author, content) => {
  return {
    type: CREATE_POST,
    id: nextPostId++,
    title,
    author,
    content
  }
}

export const deletePost = (index) => {
  return {
    type: DELETE_POST,
    index
  }
}

export const changePost = (id, title, author, content) => {
  return {
    type: CHANGE_POST,
    id,
    title,
    author,
    content
  }
}
