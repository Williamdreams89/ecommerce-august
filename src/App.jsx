import React from "react";
import HomePage from "./Components/HomePage";
import {  Routes, Route } from "react-router-dom";
import ProductDetailPage from "./Components/ProductDetailPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/product" element={<HomePage />} />
        <Route path="/product/:productid" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
