import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReduxProviders } from "./redux/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProviders>
      <App />
    </ReduxProviders>
  </React.StrictMode>
);