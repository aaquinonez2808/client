import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; // Librería react-dom
import { BrowserRouter as Router} from "react-router-dom";
// Páginas del Sitio Web
import { IndexRoutes } from "./routers/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <IndexRoutes/>
  </Router>
);
