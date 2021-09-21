import "./App.css"
import Posts from "./components/Posts"
import PostForm from "./components/Postform"
import React, { Component } from "react"
import { Provider } from "react-redux"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App
