import React, { useState } from "react";
import "./Sidebar.css";
import { BiPlus } from "react-icons/bi";
import { Modal } from "../modal";

interface IProps {
  sidebarOpen: boolean;
}

export const Sidebar: React.FC<IProps> = ({ sidebarOpen }) => {
  const [modal, setModal] = useState<{
    show: boolean;
    type: "toggle" | "add-business-modal";
  }>({ show: false, type: "toggle" });

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar">
          <div
            className="sidebar-logo"
            onClick={() => setModal({ show: !modal.show, type: "toggle" })}
          >
            <img src="/images/Avatar.png" alt="Company Logo" />
            <div>
              <p>PayShiga Tech</p>
              <p className="logo-business-id">Business ID: 00923445</p>
            </div>
          </div>
          {modal.show && modal.type === "toggle" && (
            <div
              className="add-business"
              onClick={() =>
                setModal({ show: true, type: "add-business-modal" })
              }
            >
              <BiPlus size={20} />
              <p>Add a Business</p>
            </div>
          )}
          <nav className="sidebar-nav">
            <div className="sidebar-list">
              <img src="/images/dashboard.png" alt="Dashboard icon" />
              <p>Dashboard</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/transaction.png" alt="Transactions icon" />
              <p>Transactions</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/refund.png" alt="Refunds icon" />
              <p>Refunds</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/payment.png" alt="Payments icon" />
              <p>Payments</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/card.png" alt="Cards icon" />
              <p>Cards</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/account.png" alt="Accounts icon" />
              <p>Accounts</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/bills.png" alt="Bills icon" />
              <p>Manage Bills</p>
            </div>
            <div className="sidebar-list">
              <img src="/images/e-commerce.png" alt="E-commerce icon" />
              <p>E-commerce</p>
            </div>
          </nav>
          <footer className="sidebar-footer">
            <ul>
              <li>Settings</li>
              <li>Contact Us</li>
            </ul>
          </footer>
        </div>
      </div>
      {modal.type === "add-business-modal" && (
        <Modal onClose={() => setModal({ show: false, type: "toggle" })} />
      )}
    </>
  );
};
