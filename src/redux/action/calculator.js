import { ADDITION, SUBTRACTION } from "./action.types"

export const Addition = (data) => async (dispatch) => {
  const num1 = data.num1
  const num2 = data.num2
  const result = num1 + num2
  dispatch({
    type: ADDITION,
    payload: result,
  })
}

export const Subtraction = (data) => (dispatch) => {
  const num1 = data.num1
  const num2 = data.num2
  const result = num1 - num2
  dispatch({
    type: SUBTRACTION,
    payload: result,
  })
}
