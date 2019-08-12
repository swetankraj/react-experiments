import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Ch2 from "./Ch2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React! by Swetank Raj.</h1>
        <a
          className="App-link"
          href="https://github.com/swetankraj/react-experiments/tree/master/plural-react-gs/the-basics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fork on GitHub
        </a>
        <p>
          This repo cumulates the learning of{" "}
          <a
            className="App-link"
            href="https://app.pluralsight.com/library/courses/react-js-getting-started"
          >
            React: Getting Started
          </a>{" "}
          by Samer Buna.
        </p>
        <Ch2 />
      </header>
    </div>
  );
}

export default App;
