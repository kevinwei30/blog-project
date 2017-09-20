import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class EditPage extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
    console.log(this.props.match.params.id)
    this.state = {
      post: {},
      redirectToNewPage: false,
      id: this.props.match.params.id
    }
    this.handleChange = this.handleChange.bind(this)
    this.editSubmit = this.editSubmit.bind(this)
    this.newSubmit = this.newSubmit.bind(this)
  }

  componentDidMount () {
    if (this.state.id == 0) {
      this.newPost()
    } else {
      this.getPost()
    }
  }

  newPost () {
    console.log('newPost')
    this.setState({
      post: {
        title: '',
        content: '',
        author: ''
      }
    })
  }

  getPost () {
    console.log('getPost')
    // 顯示資料
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200){
        console.log('in')
        var resObject = JSON.parse(xhttp.responseText)
        this.setState({
          post: {
            id: resObject.id,
            title: '' + resObject.title,
            author: '' + resObject.author,
            content: '' + resObject.content
          }
        })
        console.log(this.state.post)
      }
    }
    xhttp.open('GET', '/posts/' + this.props.match.params.id)
    xhttp.send()
  }

  handleChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ post: { ...this.state.post, [name]: value } })
  }

  editSubmit (event) {
    console.log('editSubmit')
    console.log(this.state.post)
    event.preventDefault()

    // 顯示資料
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('in')
        var resObject = JSON.parse(xhttp.responseText)
        console.log(this.state.post)
        this.setState({ redirectToNewPage: true })
      }
    }
    xhttp.open('PUT', '/posts/' + this.props.match.params.id)
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhttp.send(JSON.stringify(this.state.post))
  }

  newSubmit (event) {
    console.log('newSubmit')
    console.log(this.state.post)
    event.preventDefault()

    // 顯示資料
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('in')
        var resObject = JSON.parse(xhttp.responseText)
        console.log(this.state.post)
        this.setState({ redirectToNewPage: true })
      }
    }
    xhttp.open('POST', '/posts')
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhttp.send(JSON.stringify(this.state.post))
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
      padding: '10px'
      // border: '1px solid #ddd',
    }
    // The part that makes the redirect happen
    if (this.state.redirectToNewPage) {
      return (
        <Redirect to='/' />
      )
    }
    var submitHandler
    if (this.state.id == 0) {
      submitHandler = this.newSubmit
    } else {
      submitHandler = this.editSubmit
    }

    return (
      <div>
        <h1 style={h1Style}><a href='/'>My blog</a></h1>
        <div style={postStyle}>
          <form onSubmit={submitHandler}>
            Title: <br />
            <input type='text' name='title' value={this.state.post.title} onChange={this.handleChange} /><br />
            Content: <br />
            <textarea style={contentStyle} type='text' name='content' value={this.state.post.content} onChange={this.handleChange} /><br />
            Author: <br />
            <input type='text' name='author' value={this.state.post.author} onChange={this.handleChange} /><br /><br />
            <input type='submit' value='Submit' />
          </form><br /><br />
          <Link to={'/'}>放棄</Link>
        </div>
      </div>
    )
  }
}

export default EditPage
