import React from "react";
import { Routes, Route } from "react-router-dom";


// Components for routes

import Home from "./pages/Home";
import PortfolioForm from "../src/pages/FormPage";
import Professionals from "../src/pages/PortfolioPage";

import PortfolioView from "../src/pages/PortfolioView";

import PortfolioPage from "../src/pages/PortfolioPage";
import EditPage from "../src/pages/EditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<PortfolioForm />} />
      <Route path="/professionals" element={<Professionals />} />
      <Route path="/portfolio/:id" element={<PortfolioView />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}

export default App;
