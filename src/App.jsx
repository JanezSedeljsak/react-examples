import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
