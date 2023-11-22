import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Principal from "./pages/Principal";
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
