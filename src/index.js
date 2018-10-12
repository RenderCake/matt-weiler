import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "emotion";

// Your top level component
import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById("root"));
  };

  // Render!
  render(App);
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Oswald');

  html {
    font-family: 'Oswald';
  }
`;
