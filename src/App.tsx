import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/layout/layout";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<Layout />} />
          {/* <Route path="/register" element={<Signup />} />
            <Route path="/link-account" element={<LinkAccount />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
