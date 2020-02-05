import React from "react";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)