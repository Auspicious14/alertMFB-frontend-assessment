import { IoClose } from "react-icons/io5";
import "./modal.css";
import { FaGreaterThan } from "react-icons/fa6";
import React, { useState } from "react";

interface IProps {
  onClose: () => void;
}

export const Modal: React.FC<IProps> = ({ onClose }) => {
  const [modal, setModal] = useState<{
    show: boolean;
    type?: "merchant" | "producer" | "agent" | "general";
  }>({ show: false, type: "general" });

  return (
    <div className="modal-shadow-container">
      <div className="modal-container">
        <div className="modal-nav">
          <div className="add-business-logo">
            <img src="/images/add-business.png" alt="Add business logo" />
            <p>Add a Business</p>
          </div>
          <IoClose onClick={onClose} cursor={"pointer"} />
        </div>
        {modal.type === "general" && (
          <div className="modal-content">
            <p className="modal-content-title">
              What kind of account do you want to open?
            </p>
            <p className="modal-content-subtitle">
              You can always add another account later on
            </p>
            <>
              <div
                className="content-card"
                onClick={() => setModal({ show: true, type: "merchant" })}
              >
                <div className="card-image-flex">
                  <img src="/images/merchants.png" alt="merchant icon" />
                  <div className="card">
                    <p className="card-big-text">Merchant Account</p>
                    <p className="card-small-text">
                      I want to pay suppliers and recieve payment from buyers
                      accross the globe.
                    </p>
                  </div>
                </div>
                <div className="card-right-icon">
                  <FaGreaterThan />
                </div>
              </div>
              <div className="content-card">
                <div className="card-image-flex">
                  <img src="/images/user-green.png" alt="merchant icon" />
                  <div className="card">
                    <p className="card-big-text">Agent Account</p>
                    <p className="card-small-text">
                      I want to help clients with global flights, hotels,
                      tuition payments and accomodation.
                    </p>
                  </div>
                </div>
                <div className="card-right-icon">
                  <FaGreaterThan />
                </div>
              </div>
              <div className="content-card">
                <div className="card-image-flex">
                  <img src="/images/producer.png" alt="merchant icon" />
                  <div className="card">
                    <p className="card-big-text">An Exporting Producer</p>
                    <p className="card-small-text">
                      I want to export finished goods from Africa to a global
                      audience using Ojah by Shiga.
                    </p>
                  </div>
                </div>
                <div className="card-right-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </>
          </div>
        )}
        {modal.type == "merchant" && (
          <div className="modal-content">
            <p className="modal-content-title ">
              Provide some info about your business
            </p>

            <>
              <div className="content-card">
                <div className="card-image-flex">
                  <img src="/images/merchants.png" alt="merchant icon" />
                  <div className="card">
                    <p className="card-big-text">Merchant Account</p>
                    <p className="card-small-text">
                      I want to pay suppliers and recieve payment from buyers
                      accross the globe.
                    </p>
                  </div>
                </div>
                <div className="card-right-icon">
                  <FaGreaterThan />
                </div>
              </div>
              <div className="content-card">
                <div className="card-image-flex">
                  <img src="/images/user-green.png" alt="merchant icon" />
                  <div className="card">
                    <p className="card-big-text">Merchant Account</p>
                    <p className="card-small-text">
                      I want to pay suppliers and recieve payment from buyers
                      accross the globe.
                    </p>
                  </div>
                </div>
                <div className="card-right-icon">
                  <FaGreaterThan />
                </div>
              </div>
              <div className="content-card">
                <div className="card-image-flex">
                  <img src="/images/producer.png" alt="merchant icon" />
                  <div className="card">
                    <p className="card-big-text">Merchant Account</p>
                    <p className="card-small-text">
                      I want to pay suppliers and recieve payment from buyers
                      accross the globe.
                    </p>
                  </div>
                </div>
                <div className="card-right-icon">
                  <FaGreaterThan />
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};
