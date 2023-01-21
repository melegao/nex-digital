import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default Ways;
