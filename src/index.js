import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import List from "./List";
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <div>
    <Heading />
    <List />
  </div>
);
