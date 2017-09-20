import { connect } from 'react-redux'
import PostPageR from '../components/PostPageRedux'

import {
  initPost
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.getIn(['post', 'posts']).get(ownProps.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInitPost: (index) => () => (
    dispatch(initPost(index))
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPageR)
