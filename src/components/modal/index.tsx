import { IoClose } from "react-icons/io5";
import "./modal.css";
import { FaGreaterThan } from "react-icons/fa6";
import React, { useState } from "react";

interface IProps {
  onClose: () => void;
}

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-bar" style={{ width: "90%" }}></div>
      <div className="skeleton-bar" style={{ width: "70%" }}></div>
      <div className="skeleton-bar" style={{ width: "50%" }}></div>
      <div className="skeleton-bar" style={{ width: "50%" }}></div>
      <div className="skeleton-bar" style={{ width: "90%" }}></div>
      <div className="skeleton-bar" style={{ width: "70%" }}></div>
      <div className="skeleton-bar" style={{ width: "50%" }}></div>
      <div className="skeleton-bar" style={{ width: "50%" }}></div>
      <div className="skeleton-bar" style={{ width: "90%" }}></div>
      <div className="skeleton-bar" style={{ width: "70%" }}></div>
      <div className="skeleton-bar" style={{ width: "50%" }}></div>
      <div className="skeleton-bar" style={{ width: "50%" }}></div>
    </div>
  );
};

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
        <div className="modal-flex">
          <div style={{ width: "20%" }}>
            <SkeletonLoader />
          </div>
          <div className="modal-general" style={{ width: "100%" }}>
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
                          I want to pay suppliers and recieve payment from
                          buyers accross the globe.
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
                          I want to export finished goods from Africa to a
                          global audience using Ojah by Shiga.
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
              <div className="form-content">
                <p className="modal-content-title merchant">
                  Provide some info about your business
                </p>

                <>
                  <div className="content-card">
                    <form action="">
                      <div className="input-container">
                        <div className="flex-label">
                          <label htmlFor="">
                            Where is your business located at?
                          </label>
                          <div className="star-red">*</div>
                        </div>
                        <select
                          name="location"
                          id="location"
                          className="select-style"
                        >
                          <option value="nigeria">Nigeria</option>
                          <option value="america">America</option>
                          <option value="england">England</option>
                        </select>
                      </div>
                      <div className="input-container">
                        <div className="flex-label">
                          <label htmlFor="">What is your business name?</label>
                          <div className="star-red">*</div>
                        </div>
                        <input type="text" name="name" id="name" className="" />
                      </div>
                      <div className="input-container">
                        <div className="flex-label">
                          <label htmlFor="">Business Industry</label>
                          <div className="star-red">*</div>
                        </div>
                        <select
                          name="industry"
                          id="industry"
                          className="select-style"
                        >
                          <option value="fashion">Fashion</option>
                          <option value="pop">Pop</option>
                          <option value="england">England</option>
                        </select>
                      </div>
                      <div className="input-container">
                        <div className="form-flex">
                          <div className="form-flex-children">
                            <div className="flex-label">
                              <label htmlFor="">Company size</label>
                              <div className="star-red">*</div>
                            </div>
                            <select
                              name="size"
                              id="size"
                              className="select-style"
                            >
                              <option value="small">Small</option>
                              <option value="mid">Medium</option>
                              <option value="large">Large</option>
                            </select>
                          </div>
                          <div className="form-flex-children">
                            <div className="flex-label">
                              <label htmlFor="">Estimated annual volume</label>
                              <div className="star-red">*</div>
                            </div>
                            <select
                              name="size"
                              id="size"
                              className="select-style"
                            >
                              <option value="small">Small</option>
                              <option value="mid">Medium</option>
                              <option value="large">Large</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
