import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/monorepo-react-app" element={<App />} exact />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
