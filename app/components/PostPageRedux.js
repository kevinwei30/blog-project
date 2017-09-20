import React from 'react'
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

// 開始建設 Component 並使用 connect 進來的 props 並綁定事件（onChange、onClick）。注意我們的 state 因為是使用 `ImmutableJS` 所以要用 `get()` 取值

var h1Style = {
  marginTop: '50px',
  marginBottom: '20px',
  marginLeft: '100px',
  marginRight: '100px',
  paddingBottom: '20px',
  borderBottom: '1px solid gray'
}

var postStyle = {
  fontFamily: 'arial, sans-serif',
  borderCollapse: 'collapse',
  width: '50%',
  margin: 'auto'
}

var contentStyle = {
  height: '200px',
  width: '400px',
  padding: '10px',
  border: '1px solid #ddd'
}

const PostPageR = ({
  onInitPost,
  post
}) => {
  return (
    <div>
      <h1 style={h1Style}><a href='/'>My blog</a></h1>
      <div style={postStyle}>
        <h3>{post.get('title')}</h3><br />
        <h5 style={contentStyle}>{post.get('content')}</h5><br />
        <h6>Author: {post.get('author')}</h6><br />
        <Link to={'/edit/' + post.get('id')} onClick={onInitPost(post.get('id'))}>編輯</Link><br /><br />
        <Link to={'/'}>返回</Link>
      </div>
    </div>
  )
}

export default PostPageR
