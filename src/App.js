import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Code from "./pages/Code";
import Data from "./pages/Data";
import CaseStudies from "./pages/CaseStudies";
import LessonsLearned from "./pages/LessonsLearned";
import About from "./pages/About";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/data" element={<Data />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/lessons-learned" element={<LessonsLearned />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
