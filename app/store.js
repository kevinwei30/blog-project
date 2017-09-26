import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer, rootEpic } from './reducers/index'
import { getPosts, fetchPosts } from './actions/index'
// import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable'

const defaultState = {
  posts: []
}

const loggerMiddleware = createLogger()
// const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware(rootEpic)

const enhancers = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware, epicMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

store.dispatch(fetchPosts())

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
