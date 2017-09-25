import React from 'react'
import { Link } from 'react-router'

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
  deleteOnePost
}) => (
  <div>
    <h3 style={h3Style}><Link to={'/new'}>新增文章</Link></h3>
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
              <th style={thStyle}>{post.id}</th>
              <th style={thStyle1}><Link to={'/post/' + post.id}>{post.title}</Link></th>
              <th style={thStyle}>{post.author}</th>
              <th style={thStyle}><Link to={'/edit/' + post.id}>編輯</Link></th>
              <th style={thStyle}><a href='/' onClick={deleteOnePost.bind(null, post.id)}>刪除</a></th>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default PostListR
