import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import BarsPositioning from "./dbTable"

function App() {
  return (
      <BarsPositioning/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);