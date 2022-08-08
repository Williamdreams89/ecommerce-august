import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ApiSlice } from "./Api/ApiSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductDetailPage from "./Components/ProductDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={ApiSlice}>
      <Router>
      <App />
        
      </Router>
    </ApiProvider>
  </React.StrictMode>
);
