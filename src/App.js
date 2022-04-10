import logo from "./logo.svg"
import "./App.css"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import MyComponent from "./MyComponent"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyComponent />
      </div>
    </Provider>
  )
}

export default App
