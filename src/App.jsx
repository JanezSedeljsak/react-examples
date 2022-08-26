import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE } from "./utils";

import Navbar from "./components/Navbar";
import PublicNavbar from "./components/PublicNavbar";
import AddTodoModal from "./components/modals/AddTodoModal";

import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const Navigation = ({ isAuth }) => {
  if (!isAuth) {
    return <PublicNavbar />;
  }

  return <Navbar />;
};

function App() {
  const isAuth = useSelector((state) => !!state.user.jwt);

  return (
    <BrowserRouter>
      <Navigation isAuth={isAuth} />
      <div className="main-container">
        <Routes>
          <Route path={BASE} element={<HomePage />} />
          <Route path={BASE + "login"} element={<Login />} />
          <Route path={BASE + "register"} element={<Register />} />
          <Route path={BASE + "profile"} element={<Profile />} />
        </Routes>
      </div>
      <AddTodoModal />
    </BrowserRouter>
  );
}

export default App;
