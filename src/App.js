import React, { Component } from "react";
import { hot } from "react-hot-loader";
//
import "./app.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Matt Weiler Test Site</h1>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
