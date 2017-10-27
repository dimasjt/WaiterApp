import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { routerMiddleware } from "react-router-redux"
import { createBrowserHistory } from "history"

import rootReducers from "../reducers"
import { apolloMiddleware } from "../apollo"

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history = createBrowserHistory()
const middleware = applyMiddleware(
  thunk,
  routerMiddleware(history),
  apolloMiddleware,
)

const store = createStore(rootReducers, enhancers, middleware)

export {
  store,
  history,
}
