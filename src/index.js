import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"
//stylesheet
import "./App.css"

// const element = <h1>Hello</h1>
//component file
//https://ibaslogic.com/css-in-reactjs-app/
ReactDOM.render(
<React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
document.getElementById("root"))