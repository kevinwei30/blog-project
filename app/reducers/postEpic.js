import { ajax } from 'rxjs/observable/dom/ajax'
import { FETCH_POSTS } from '../constants/actionTypes'
import { receivePosts } from '../actions/index'
import 'rxjs'

export const fetchPostsEpic = action$ => {
  return action$.ofType(FETCH_POSTS)
    .mergeMap(action =>
      ajax.get('/posts')
        .map(res => {
          const posts = res.response
          return receivePosts(posts)
        })
    )
}
