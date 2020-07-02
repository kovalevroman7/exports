import React from "react";
import { sayHi } from "./TestExport1";
import "./styles.css";

export default function App() {
  const onClick = () => {
    sayHi();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
