import React from "react";
import "./index.css";
import App from "./App";
import { hydrate } from "react-dom";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  hydrate( <App />, rootElement);
} else {
  root.render( <App />, rootElement);
}
