import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/Styles.scss";
import reportWebVitals from "./reportWebVitals";
//import {API_WEATHER_KEY}  from "./config";
import { EnvProvider } from "./context/EnvContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EnvProvider>
    <App />
  </EnvProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
