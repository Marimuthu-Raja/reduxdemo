import { ADDITION, SUBTRACTION } from "../action/action.types"

const initialState = {
  addition_value: 0,
  subtraction_value: 0,
}

export const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {
        ...state,
        addition_value: action.payload,
      }
    case SUBTRACTION:
      return {
        ...state,
        subtraction_value: action.payload,
      }
    default:
      return state
  }
}
