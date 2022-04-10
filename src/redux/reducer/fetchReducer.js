import { FETCHAPI } from "../action/action.types"

const initialState = {
  apiData: [],
}
export const FetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHAPI:
      return {
        ...state,
        apiData: action.payload,
      }
    default:
      return state
  }
}
