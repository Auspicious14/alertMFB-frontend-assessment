import React from "react";
import "./NavBar.css";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa"; // Icons

interface IProps {
  toggleSidebar: () => void;
}
export const NavBar: React.FC<IProps> = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3>Dashboard</h3>
      </div>

      <div className="navbar-right">
        <FaBell className="navbar-icon" />
        <FaUserCircle className="navbar-icon" />
        <div className="navbar-toggle">
          <input type="checkbox" id="toggle-switch" />
          <label htmlFor="toggle-switch" className="toggle-label">
            <span className="toggle-ball"></span>
          </label>
        </div>
        <FaBars className="navbar-icon navbar-menu" onClick={toggleSidebar} />
      </div>
    </div>
  );
};
