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
  padding: '10px'
}

const EditPostR = React.createClass({
  handleSubmit (e) {
    e.preventDefault()
    const title = this.refs.title.value
    const author = this.refs.author.value
    const content = this.refs.content.value
    // this.props.createPost(title, author, content)
    this.props.postNewPost(title, author, content)
    console.log('new!')
    window.location = '/'
  },
  render () {
    return (
      <div>
        <form style={postStyle} ref='postForm' onSubmit={this.handleSubmit}>
          Title: <br />
          <input type='text' ref='title' /><br />
          Content: <br />
          <textarea style={contentStyle} type='text' ref='content' /><br />
          Author: <br />
          <input type='text' ref='author' /><br /><br />
          <input type='submit' value='送出' /><br /><br />
          <Link to={'/'}>放棄</Link>
        </form>
      </div>
    )
  }
})

export default EditPostR
