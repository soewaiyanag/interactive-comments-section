import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";

const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

store.subscribe(() => {
  const { comments } = store.getState();
  localStorage.setItem("comments", JSON.stringify(comments));
  render();
});
render();
