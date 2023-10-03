import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicShader from "./Components/Basic/index.jsx";
import Uniforms from "./Components/Uniforms/index.jsx";

function App() {
  return (
    <div id="canvas-container">
      <BrowserRouter>
        <div className="centered-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-shader" element={<BasicShader />} />
            <Route path="/uniforms" element={<Uniforms />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: "32px",
      }}
    >
      <h1>Shader Practice</h1>
      <ul>
        <li>
          <a href="/basic-shader">Basic Shader</a>
        </li>
        <li>
          <a href="/uniforms">Uniforms</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
