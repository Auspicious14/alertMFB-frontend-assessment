import { IoClose } from "react-icons/io5";
import "./modal.css";
import { FaGreaterThan } from "react-icons/fa6";
import React, { useState } from "react";
import { updateForm } from "../../store/form";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    location: "",
    businessName: "",
    industry: "",
    companySize: "",
    estimatedVolume: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const vals = dispatch(updateForm(formData));
    console.log({ vals });
    onClose();
  };
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
          <SkeletonLoader />

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
                  <form
                    action=""
                    onSubmit={handleSubmit}
                    className="form-content-card"
                  >
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
                        value={formData.location}
                        onChange={handleChange}
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
                      <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-container">
                      <div className="flex-label">
                        <label htmlFor="">Business Industry</label>
                        <div className="star-red">*</div>
                      </div>
                      <select
                        name="industry"
                        id="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="select-style"
                      >
                        <option value="fashion">Fashion</option>
                        <option value="pop">Pop</option>
                        <option value="e-commerce">E-commerce</option>
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
                            name="companySize"
                            id="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="select-style"
                          >
                            <option value="1 - 100">1 - 100</option>
                            <option value="101 - 200">101 - 200</option>
                          </select>
                        </div>
                        <div className="form-flex-children">
                          <div className="flex-label">
                            <label htmlFor="">Estimated annual volume</label>
                            <div className="star-red">*</div>
                          </div>
                          <select
                            name="estimatedVolume"
                            id="estimatedVolume"
                            value={formData.estimatedVolume}
                            onChange={handleChange}
                            className="select-style"
                          >
                            <option value="$1000 - $10,000">
                              $1000 - $10,000
                            </option>
                            <option value="$10,000 - $50,000">
                              $10,000 - $50,000
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="action-buttons">
                      <button
                        type="button"
                        onClick={() =>
                          setModal({ show: true, type: "general" })
                        }
                      >
                        Back
                      </button>
                      <button type="submit" className="create-business">
                        Create Business
                      </button>
                    </div>
                  </form>
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
