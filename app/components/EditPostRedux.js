import React from 'react'
// import ReactDOM from 'react-dom'
import { Redirect, Link } from 'react-router-dom'

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
  padding: '10px'
}

const EditPostR = ({
  onChangePost,
  onCreatePost,
  post,
  redirectToNewPage
}) => {
  if (redirectToNewPage === true) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div>
        <h1 style={h1Style}><a href='/'>My blog</a></h1>
        <div style={postStyle}>
          Title: <br />
          <input type='text' name='title' value={post.get('title')} onChange={onChangePost} /><br />
          Content: <br />
          <textarea style={contentStyle} type='text' name='content' value={post.get('content')} onChange={onChangePost} /><br />
          Author: <br />
          <input type='text' name='author' value={post.get('author')} onChange={onChangePost} /><br /><br />
          <Link to={'/'}><button onClick={onCreatePost}>送出</button></Link><br /><br />
          <Link to={'/'}>放棄</Link>
        </div>
      </div>
    )
  }
}

export default EditPostR
