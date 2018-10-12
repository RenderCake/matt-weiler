import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Nav from "./components/nav";
//

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1 className="App-title">Matt Weiler Test Site</h1>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
