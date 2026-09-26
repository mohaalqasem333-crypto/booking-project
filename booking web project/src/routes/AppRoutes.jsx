import { Routes, Route } from "react-router-dom";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Home from "../features/home/pages/Home";

// import Hotels from '../pages/Hotels'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/*       
      <Route path="/hotels" element={<Hotels />} /> */}
    </Routes>
  );
}

export default AppRoutes;
