import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ZipCode } from "./features/zipcode";
import UsersList from "./user-list/UsersList";
import { Comments } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comments />
        <UsersList />
        <img src={logo} className="App-logo" alt="logo" />
        <ZipCode />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
