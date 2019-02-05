import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/TodoList";

const destination = document.querySelector("#container");

ReactDOM.render(
  <div className="header">
    <h1>Things to do...</h1>
    <TodoList />
  </div>,
  destination
);
