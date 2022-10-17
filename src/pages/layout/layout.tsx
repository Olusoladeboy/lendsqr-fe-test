import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Navbar from "../shared/navbar/navbar";
import User from "../user/user";
import "./layout.scss";

function Layout() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleVisibility = (e: any) => {
    e.preventDefault();
    const visibility = !passwordVisible;
    setPasswordVisible(visibility);
  };
  return (
    <div className="layout h-full">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-12 gap-0 h-full">
        <div className="col-span-2 layout_grid-1">
          <ul>
            <li>
              <Link to="/user"></Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 layout_grid-2">
          <Router>
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/user" element={<User />} />
              {/* <Route path="/register" element={<Signup />} />
            <Route path="/link-account" element={<LinkAccount />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
            {/* <ToastContainer /> */}
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Layout;
