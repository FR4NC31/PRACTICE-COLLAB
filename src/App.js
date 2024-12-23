import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div className="p-10 text-xl text-gray-500">Page Not Found :( </div>} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
