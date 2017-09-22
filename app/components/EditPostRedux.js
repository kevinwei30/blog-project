import React from 'react'
import { Redirect, Link } from 'react-router'

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
    const { postId } = this.props.params
    const title = this.refs.title.value
    const author = this.refs.author.value
    const content = this.refs.content.value
    if (postId === 'new') {
      // this.props.createPost(title, author, content)
      this.props.postNewPost(title, author, content)
      console.log('new!')
    } else {
      // this.props.changePost(parseInt(postId), title, author, content)
      this.props.changeOnePost(parseInt(postId), title, author, content)
      console.log('change!')
    }
    // this.refs.postForm.reset()
    window.location = '/'
  },
  render () {
    const { postId } = this.props.params
    const posts = this.props.posts
    var post = {}
    const i = posts.findIndex((post) => String(post.id) === postId)
    if (i >= 0) {
      post = posts[i]
    }
    return (
      <div>
        <form style={postStyle} ref='postForm' onSubmit={this.handleSubmit}>
          Title: <br />
          <input type='text' ref='title' defaultValue={post.title} /><br />
          Content: <br />
          <textarea style={contentStyle} type='text' ref='content' defaultValue={post.content} /><br />
          Author: <br />
          <input type='text' ref='author' defaultValue={post.author} /><br /><br />
          <input type='submit' value='送出' /><br /><br />
          <Link to={'/'}>放棄</Link>
        </form>
      </div>
    )
  }
})

export default EditPostR
