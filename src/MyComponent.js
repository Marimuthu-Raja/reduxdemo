import React from "react"
import { connect } from "react-redux"
import { Addition, Subtraction } from "./redux/action/calculator"
import { getApiData } from "./redux/action/fetchapi"
const MyComponent = ({
  globalState,
  AddTwoNumbers,
  SubTractTwoNumbers,
  globalApiData,
  FetchDataOnClick,
}) => {
  return (
    <div>
      <h3>Addition Value:{globalState.addition_value}</h3>
      <h3>Subtraction Value:{globalState.subtraction_value}</h3>
      <button
        onClick={() =>
          AddTwoNumbers({
            num1: globalState.addition_value + 5,
            num2: globalState.addition_value + 5,
          })
        }
      >
        Add
      </button>
      <button onClick={() => SubTractTwoNumbers({ num1: 25, num2: 5 })}>
        Subtract
      </button>
      <br />
      {JSON.stringify(globalApiData.apiData)}
      <br />
      <button onClick={FetchDataOnClick}>Fetch API Data</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  globalState: state.MyReducer,
  globalApiData: state.FetchReducer,
})

const mapDispatchToProps = {
  AddTwoNumbers: (data) => Addition(data),
  SubTractTwoNumbers: (data) => Subtraction(data),
  FetchDataOnClick: () => getApiData(),
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
