import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import nav from './reducers/nav'

export default compose(applyMiddleware(thunk))(createStore)(
  combineReducers({
    nav,
  }),
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
