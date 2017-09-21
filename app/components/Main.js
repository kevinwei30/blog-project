import React from 'react'
import { Link } from 'react-router'

var h1Style = {
  marginTop: '50px',
  marginBottom: '20px',
  marginLeft: '100px',
  marginRight: '100px',
  paddingBottom: '20px',
  borderBottom: '1px solid gray'
}

const Main = React.createClass({
  render () {
    return (
      <div>
        <h1 style={h1Style}><Link to='/'>My blog</Link></h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main
