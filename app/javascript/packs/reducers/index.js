import { combineReducers } from "redux"
import { routerReducer as route } from "react-router-redux"
import { reducer as form } from "redux-form"

import { apolloReducer as apollo } from "../apollo"

const combinedReducers = combineReducers({
  route,
  form,
  apollo,
})

export default combinedReducers
