import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import user from "../../../assets/images/user-profile.svg";
import notification from "../../../assets/icons/notification.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import "./navbar.scss";

function Navbar() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleVisibility = (e: any) => {
    e.preventDefault();
    const visibility = !passwordVisible;
    setPasswordVisible(visibility);
  };
  return (
    <div className="navbar">
      <div className="navbar_wrapper flex justify-between items-center p-5">
        <div className="navbar_logo">
          <img src={logo} alt="" />
        </div>
        <div className="hidden sm:block navbar_input relative">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm border-l-gray-100 border-l-2 rounded-r-lg rounded-l-lg border border-gray-300"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2 text-sm font-medium rounded-r-lg border focus:outline-none"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hidden sm:block underline" to="/app">
            Docs
          </Link>
          <Link className="hidden sm:block" to="/app">
            <img src={notification} alt="" />
          </Link>
          <Link className="navbar_dp flex items-center gap-2" to="/app">
            <img className="navbar_dp_user" src={user} alt="" />
            <p>Adedeji</p>
            <img className="navbar_dp_arrow-down" src={arrowDown} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
