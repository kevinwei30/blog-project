import React from 'react'
import { Link } from 'react-router-dom'

class PostList extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    this.getPosts()
  }

  getPosts () {
    console.log('getPosts')
    // 顯示資料
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('in')
        var resObject = JSON.parse(xhttp.responseText)
        for (var i = 0; i < resObject.length; i++) {
          this.setState({
            posts: this.state.posts.concat([{
              id: resObject[i].id,
              title: resObject[i].title,
              author: resObject[i].author,
              content: resObject[i].content
            }])
          })
        }
        console.log(this.state.posts)
      }
    }
    xhttp.open('GET', '/posts')
    xhttp.send()
  }

  deletePost (id) {
    console.log('deletePost')
    // 顯示資料
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('in')
        var resObject = JSON.parse(xhttp.responseText)
        this.setState({
          posts: []
        })
        for (var i = 0; i < resObject.length; i++) {
          this.setState({
            posts: this.state.posts.concat([{
              id: resObject[i].id,
              title: resObject[i].title,
              author: resObject[i].author,
              content: resObject[i].content
            }])
          })
        }
      }
    }
    xhttp.open('DELETE', '/posts/' + id)
    xhttp.send()
  }

  render () {
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

    return (
      <div>
        <h1 style={h1Style}><a href='/'>My blog</a></h1>
        <h3 style={h3Style}><Link to={'/edit/0'}>新增文章</Link></h3>
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
              this.state.posts.map((post, index) => (
                <tr key={index}>
                  <th style={thStyle}>{post.id}</th>
                  <th style={thStyle1}><Link to={'/posts/' + post.id}>{post.title}</Link></th>
                  <th style={thStyle}>{post.author}</th>
                  <th style={thStyle}><Link to={'/edit/' + post.id}>編輯</Link></th>
                  <th style={thStyle}><a href='/' value={post.id} onClick={() => this.deletePost(post.id)}>刪除</a></th>
                </tr>
              ))
            }
          </tbody>
        </table>
        {this.props.children}
      </div>
    )
  }
}

export default PostList
