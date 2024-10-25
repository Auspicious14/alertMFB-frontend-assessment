import React, { useState } from "react";
import { Sidebar } from "../sidebar";
import { NavBar } from "../nav";
import "./layout.css";

interface IProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`layout-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="layout-content">
        <NavBar toggleSidebar={toggleSidebar} />
        <div className="layout-children">{children}</div>
      </div>
    </div>
  );
};
