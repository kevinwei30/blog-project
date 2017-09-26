import {
  CREATE_POST,
  DELETE_POST,
  CHANGE_POST,
  FETCH_POSTS,
  RECEIVE_POSTS
} from '../constants/actionTypes'
import axios from 'axios'

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

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const getPosts = () => {
  return function (dispatch) {
    return axios.get('/posts')
      .then(res => res.data)
      .then(posts => {
        nextPostId = posts[posts.length - 1].id + 1
        dispatch(receivePosts(posts))
      })
  }
}

export const postNewPost = (title, author, content) => {
  return function (dispatch) {
    return axios.post('/posts', {
      id: nextPostId++,
      title,
      content,
      author
    })
  }
}

export const deleteOnePost = (id) => {
  return function (dispatch) {
    return axios.delete(`/posts/${id}`)
  }
}

export const changeOnePost = (id, title, author, content) => {
  return function (dispatch) {
    return axios.put(`/posts/${id}`, {
      title,
      content,
      author
    })
  }
}
