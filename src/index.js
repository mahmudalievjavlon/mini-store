import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextComp from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextComp>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextComp>
);
