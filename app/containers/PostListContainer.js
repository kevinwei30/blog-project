import { connect } from 'react-redux'
import PostListR from '../components/PostListRedux'

import {
  deletePost,
  initPost
} from '../actions'

const mapStateToProps = (state) => {
  console.log(state.getIn(['post', 'posts']).count())
  return {
    posts: state.getIn(['post', 'posts'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDeletePost: (index) => () => (
    dispatch(deletePost({ index }))
  ),
  onInitPost: (index) => () => (
    dispatch(initPost(index))
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListR)
