import { combineReducers } from "redux"
import { MyReducer } from "."
import { FetchReducer } from "./fetchReducer"

export default combineReducers({
  MyReducer,
  FetchReducer,
})
