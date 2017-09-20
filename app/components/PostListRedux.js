import React from 'react'
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

// Component 部分值的注意的是 todos state 是透過 map function 去迭代出元素，由於要讓 React JSX 可以渲染並保持傳入觸發 event state 的 immutable，所以需使用 toJS() 轉換 component of array。
// 由 Component 傳進欲刪除元素的 index

var h1Style = {
  marginTop: '50px',
  marginBottom: '20px',
  marginLeft: '100px',
  marginRight: '100px',
  paddingBottom: '20px',
  borderBottom: '1px solid gray'
}
var h3Style = {
  marginTop: '20px',
  marginBottom: '20px',
  marginLeft: '150px'
}
var tableStyle = {
  fontFamily: 'arial, sans-serif',
  borderCollapse: 'collapse',
  width: '60%',
  margin: 'auto'
}
var thStyle = {
  border: '2px solid #dddddd',
  textAlign: 'left',
  padding: '8px'
}
var thStyle1 = {
  border: '2px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
  width: '50%'
}

const PostListR = ({
  posts,
  onDeletePost,
  onInitPost
}) => (
  <div>
    <h1 style={h1Style}><a href='/'>My blog</a></h1>
    <h3 style={h3Style}><Link to={'/edit/' + posts.count()}>新增文章</Link></h3>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Post Id</th>
          <th style={thStyle1}>Title</th>
          <th style={thStyle}>Author</th>
          <th style={thStyle}>Edit</th>
          <th style={thStyle}>Delete</th>
        </tr>
        {
          posts.map((post, index) => (
            <tr key={index}>
              <th style={thStyle}>{index}</th>
              <th style={thStyle1}><Link to={'/posts/' + index}>{post.get('title')}</Link></th>
              <th style={thStyle}>{post.get('author')}</th>
              <th style={thStyle}><Link to={'/edit/' + index} onClick={onInitPost(index)}>編輯</Link></th>
              <th style={thStyle}><a onClick={onDeletePost(index)}>刪除</a></th>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default PostListR
