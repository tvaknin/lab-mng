import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import DatatablePage from "./dbTable"
import BarsPositioning2 from "./utilities"

function App() {
  return (
    <div><DatatablePage />
      <BarsPositioning2 /></div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);