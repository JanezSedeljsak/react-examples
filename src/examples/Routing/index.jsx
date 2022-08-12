import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Routing.css";

function Routing() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>home</div>;
}

function Profile() {
  return <div>profile</div>;
}

function Navigation() {
  return (
    <div>
      <h1>My routing</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link>
        {" | "}
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}

export default Routing;
