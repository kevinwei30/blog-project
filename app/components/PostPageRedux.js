import React from 'react'
import { Link } from 'react-router'

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
  posts,
  params
}) => {
  var post = {}
  const i = posts.findIndex((post) => String(post.id) === params.postId)
  if (i >= 0) {
    post = posts[i]
  }
  return (
    <div style={postStyle}>
      <h3>{post.title}</h3><br />
      <h5 style={contentStyle}>{post.content}</h5><br />
      <h6>Author: {post.author}</h6><br />
      <Link to={'/edit/' + post.id}>編輯</Link><br /><br />
      <Link to={'/'}>返回</Link>
    </div>
  )
}

export default PostPageR
