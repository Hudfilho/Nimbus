import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Principal from "./pages/Principal";
import { HashRouter, Route, Routes } from "react-router-dom";
import SobreNos from "./pages/SobreNos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/about" element={<SobreNos />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
