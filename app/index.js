import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import PostList from './components/PostList'
import PostPage from './components/PostPage'
import EditPage from './components/EditPage'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PostList}></IndexRoute>
        <Route path='/post/:postId' component={PostPage}></Route>
        <Route path='/edit/:postId' component={EditPage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
