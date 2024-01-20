import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import EventProvider from "./EventProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EventProvider>
      <App />
    </EventProvider>
  </React.StrictMode>,
);
