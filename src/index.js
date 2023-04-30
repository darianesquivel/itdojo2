import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DynamicForm from "./components/DynamicForm";
import data from "./db.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DynamicForm inputs={data} />
  </React.StrictMode>
);
