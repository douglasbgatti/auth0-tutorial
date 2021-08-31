import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Auth0ProviderWrapper from "./providers/Auth0ProviderWrapper";

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWrapper>
      <App />
    </Auth0ProviderWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
