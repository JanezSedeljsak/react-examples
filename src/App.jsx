import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE } from './utils';

import Navbar from "./components/Navbar";
import PublicNavbar from "./components/PublicNavbar";

import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <PublicNavbar />
      <div className="main-container">
        <Routes>
          <Route path={BASE} element={<HomePage />} />
          <Route path={BASE + "login"} element={<Login />} />
          <Route path={BASE + "register"} element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;