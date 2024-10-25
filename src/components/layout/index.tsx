import React from "react";
import { Sidebar } from "../sidebar";
import { NavBar } from "../nav";
import "./layout.css";

interface IProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <NavBar />
        <div className="layout-children">{children}</div>
      </div>
    </div>
  );
};
