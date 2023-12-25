import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="listado" element={<Listado />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
