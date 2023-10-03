import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicShader from "./Components/Basic/index.jsx";

function App() {
  return (
    <div id="canvas-container">
      <BrowserRouter>
        <div className="centered-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-shader" element={<BasicShader />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div className="home-content">
      <h1>Shader Practice</h1>
      <ul>
        <li>
          <a href="/basic-shader">Go to Basic Shader</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
