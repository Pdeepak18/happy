import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";
import WelcomePage from "./components/WelcomePage";

import Quiztime from "./pages/Quiztime";
import Home from "./pages/Home";
import Audio from "./pages/Audio";
import Story1 from "./pages/Story1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiztime" element={<Quiztime />} />
        <Route path="/audio" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/story1" element={<Story1 />} />
      </Routes>
      {console.log("Code: Jajantaram Mamantaram")}
    </BrowserRouter>
  );
}

export default App;
