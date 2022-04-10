import { FETCHAPI } from "./action.types"

export const getApiData = () => async (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: FETCHAPI,
        payload: json,
      })
    })
}

// export const postData = (data) => async(dispatch) => {

// }
