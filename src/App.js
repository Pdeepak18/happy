import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quiztime from "./pages/Quiztime";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/quiztime" element={<Quiztime />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
