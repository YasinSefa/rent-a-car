import "./App.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Register from "./layouts/Register";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
