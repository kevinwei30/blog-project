import { connect } from 'react-redux'
import EditPostR from '../components/EditPostRedux'

// 將欲使用的 actions 引入
import {
  changePost,
  createPost
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.getIn(['post', 'post']),
    redirectToNewPage: state.getIn(['post', 'redirectToNewPage'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
  onChangePost: (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    // dispatch(changePost({ [name]: value }))
    dispatch(changePost([name, value]))
  },
  // 當使用者按下送出時，發出 createTodo action 並清空 input 
  onCreatePost: () => {
    dispatch(changePost(['id', ownProps.match.params.id]))
    dispatch(createPost(ownProps.match.params.id))
    dispatch(changePost({ title: '', content: '', author: '' }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostR)
