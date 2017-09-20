import React from 'react'
import { Link } from 'react-router-dom'

class PostPage extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
    console.log(this.props.match.params.id)
    this.state = {
      post: {}
    }
  }

  componentDidMount () {
    this.getPost()
  }

  getPost () {
    console.log('getPost')
    // 顯示資料
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('in')
        var resObject = JSON.parse(xhttp.responseText)
        this.setState({
          post: {
            id: resObject.id,
            title: resObject.title,
            author: resObject.author,
            content: resObject.content
          }
        })
        console.log(this.state.post)
      }
    }
    xhttp.open('GET', '/posts/' + this.props.match.params.id)
    xhttp.send()
  }

  render () {
    var h1Style = {
      marginTop: '50px',
      marginBottom: '50px',
      marginLeft: '100px'
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

    return (
      <div>
        <h1 style={h1Style}><a href='/'>My blog</a></h1>
        <div style={postStyle}>
          <h3>{this.state.post.title}</h3><br />
          <h5 style={contentStyle}>{this.state.post.content}</h5><br />
          <h6>Author: {this.state.post.author}</h6><br />
          <Link to={'/edit/' + this.props.match.params.id}>編輯</Link><br />
          <Link to={'/'}>返回</Link>
        </div>
      </div>
    )
  }
}

export default PostPage
