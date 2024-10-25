import React from "react";
import "./NavBar.css";
import { FaBell, FaUserCircle } from "react-icons/fa"; // Icons

export const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      {/* Left Side - Dashboard Text */}
      <div className="navbar-left">
        <h3>Dashboard</h3>
      </div>

      {/* Right Side - User, Bell, Settings */}
      <div className="navbar-right">
        <FaBell className="navbar-icon" />
        <FaUserCircle className="navbar-icon" />
        <div className="navbar-toggle">
          <input type="checkbox" id="toggle-switch" />
          <label htmlFor="toggle-switch" className="toggle-label">
            <span className="toggle-ball"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
