import { combineReducers } from "redux"
import { routerReducer as route } from "react-router-redux"
import { reducer as form } from "redux-form"

import { apolloReducer as apollo } from "../apollo"

import cart from "./cart"
import flash from "./flash"

const combinedReducers = combineReducers({
  route,
  form,
  apollo,
  cart,
  flash,
})

export default combinedReducers
