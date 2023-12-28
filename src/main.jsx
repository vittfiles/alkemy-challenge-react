import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Listado from "./components/pages/Listado.jsx";
import Detalles from "./components/pages/Detalles.jsx";
import Resultados from "./components/pages/Resultados.jsx";
import Favoritos from "./components/pages/Favoritos.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="listado" element={<Listado />} />
          <Route path="detalles/:id" element={<Detalles />} />
          <Route path="resultados" element={<Resultados />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
