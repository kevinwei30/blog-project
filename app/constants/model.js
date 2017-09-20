import Immutable from 'immutable'

export const PostState = Immutable.fromJS({
// export const PostState = ({
  'posts': [],
  'post': {
    id: '',
    title: '',
    author: '',
    content: ''
  },
  'redirectToNewPage': false
  // 'id': 0
})
