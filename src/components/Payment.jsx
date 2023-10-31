import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="main-wrapper">
        <header className="header login-header-info">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="index-2" className="navbar-brand logo">
                <img src="/component_assets/img/logo.png" className="img-fluid" alt="Logo" />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="index-2" className="menu-logo">
                  <img src="/component_assets/img/logo.png" className="img-fluid" alt="Logo" />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li>
                  <a href="faq">FAQ</a>
                </li>
                <li>
                  <a href="login-email">Login</a>
                </li>
                <li className="flag-dropdown-hide">
                  <div className="flag-dropdown">
                    <a
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      <img
                        src="/component_assets/img/flags/flag-01.png"
                        alt="flag-image"
                        height="20"
                        className="flag-img"
                      />{" "}
                      <span>English</span>
                    </a>
                    <div className="dropdown-menu">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <img
                          src="/component_assets/img/flags/flag-01.png"
                          alt="flag-image"
                          height="16"
                        />{" "}
                        English
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <img
                          src="/component_assets/img/flags/flag-02.png"
                          alt="flag-image"
                          height="16"
                        />{" "}
                        French
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <img
                          src="/component_assets/img/flags/flag-03.png"
                          alt="flag-image"
                          height="16"
                        />{" "}
                        Spanish
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <img
                          src="/component_assets/img/flags/flag-05.png"
                          alt="flag-image"
                          height="16"
                        />{" "}
                        German
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item dropdown">
                <div className="flag-dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <img
                      src="/component_assets/img/flags/flag-01.png"
                      alt="flag-image"
                      height="20"
                      className="flag-img"
                    />{" "}
                    <span>English</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img
                        src="/component_assets/img/flags/flag-01.png"
                        alt="flag-image"
                        height="16"
                      />{" "}
                      English
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img
                        src="/component_assets/img/flags/flag-02.png"
                        alt="flag-image"
                        height="16"
                      />{" "}
                      French
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img
                        src="/component_assets/img/flags/flag-03.png"
                        alt="flag-image"
                        height="16"
                      />{" "}
                      Spanish
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img
                        src="/component_assets/img/flags/flag-05.png"
                        alt="flag-image"
                        height="16"
                      />{" "}
                      German
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </header>

        <div className="doctor-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="back-link">
                  <a href="consultation">
                    <i className="fa-solid fa-arrow-left-long"></i> Back
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="paitent-header">
                  <h4 className="paitent-title">Payment</h4>
                </div>
                <div className="booking-header">
                  <h4 className="booking-title">Payments Methods</h4>
                </div>
                <div className="payments-form">
                  <form action="https://doccure.dreamguystech.com/html/template/booking-success-one">
                    <div className="payment-mb-3">
                      <div className="mb-3">
                        <label className="custom_radio">
                          <input type="radio" name="payment" checked />
                          <span className="checkmark"></span> Debit or Credit Card
                        </label>
                      </div>
                      <div className="mb-3 card-label">
                        <label className="mb-2">Name on Card</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="mb-3 card-label">
                        <label className="mb-2">Card Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3 card-label">
                            <label className="mb-2">Expiry Month</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3 card-label">
                            <label className="mb-2">Expiry Year</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="YYYY"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3 card-label">
                            <label className="mb-2">CVV</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="****"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment-mb-3">
                      <div className="mb-3">
                        <label className="custom_radio">
                          <input type="radio" name="payment" />
                          <span className="checkmark"></span> Paypal
                        </label>
                      </div>
                      <div className="mb-3">
                        <label className="custom_radio">
                          <input type="radio" name="payment" />
                          <span className="checkmark"></span> Cash on Visit
                        </label>
                      </div>
                      <div className="mb-3">
                        <label className="custom_radio">
                          <input type="radio" name="payment" />
                          <span className="checkmark"></span> Bank Transfer
                        </label>
                      </div>
                      <div className="mb-3">
                        <label className="custom_radio">
                          <input type="radio" name="payment" />
                          <span className="checkmark"></span> UPI
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 mb-0">
                      <div className="booking-btn">
                        <button
                          type="submit"
                          className="btn btn-primary prime-btn justify-content-center align-items-center"
                        >
                          Next <i className="feather-arrow-right-circle"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="booking-header">
                  <h4 className="booking-title">Booking Summary</h4>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body">
                    <div className="booking-doctor-details">
                      <div className="booking-doctor-left">
                        <div className="booking-doctor-img">
                          <a href="doctor-profile">
                            <img
                              src="/component_assets/img/doctors/doctor-02.jpg"
                              alt="John Doe"
                            />
                          </a>
                        </div>
                        <div className="booking-doctor-info">
                          <h4>
                            <a href="doctor-profile">Dr. John Doe</a>
                          </h4>
                          <p>MBBS, Dentist</p>
                        </div>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <i className="fas fa-circle-check"></i>
                          <a href="doctor-profile-settings">Edit</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body booking-list-body">
                    <div className="booking-list">
                      <div className="booking-date-list">
                        <ul>
                          <li>
                            Booking Date: <span>Sun, 30 Aug 2023</span>
                          </li>
                          <li>
                            Booking Time: <span>10.00AM to 11:00AM</span>
                          </li>
                        </ul>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <a href="booking">Edit</a>
                        </p>
                      </div>
                    </div>
                    <div className="booking-list">
                      <div className="booking-date-list">
                        <ul>
                          <li>
                            Consultation Type:{" "}
                            <span>
                              <i className="feather-video"></i> Video Consulting
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <a href="consultation">Edit</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body booking-list-body">
                    <div className="booking-list">
                      <div className="booking-date-list consultation-date-list">
                        <ul>
                          <li>
                            Consultation Fee: <span>$150.00</span>
                          </li>
                          <li>
                            Booking Fee: <span>$8.00</span>
                          </li>
                          <li>
                            Tax: <span>$5.00</span>
                          </li>
                          <li>
                            <span className="total-amount"></span>Total{" "}
                            <span>$163.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="booking-btn proceed-btn">
                  <a
                    href="booking-success-one"
                    className="btn btn-primary prime-btn"
                  >
                    Proceed to Pay $163.00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
      </div>

      <script src="assets/js/jquery-3.7.0.min.js"></script>

      <script src="assets/js/bootstrap.bundle.min.js"></script>

      <script src="assets/js/feather.min.js"></script>

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default Payment;
