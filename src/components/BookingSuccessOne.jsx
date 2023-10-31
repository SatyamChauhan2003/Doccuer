import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/css/custom.css";
<link rel="shortcut icon" href="/component_assets/img/favicon.png" type="image/x-icon" />;
const BookingSuccessOne = () => {
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
                  <a href="payment">
                    <i className="fa-solid fa-arrow-left-long"></i> Back
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="success-content">
                  <div className="success-icon">
                    <i className="fas fa-circle-check"></i>
                  </div>
                  <h4>Your Appointment Booked Succesfully</h4>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body booking-list-body">
                    <div className="booking-doctor-left booking-success-info">
                      <div className="booking-doctor-img">
                        <a href="javascript:void(0);">
                          <img
                            src="/component_assets/img/doctors/doctor-02.jpg"
                            alt="John Doe"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="booking-doctor-info">
                        <h4>
                          <a href="javascript:void(0);">Dr. John Doe</a>
                        </h4>
                        <p>MBBS, Dentist</p>
                        <div className="booking-doctor-location">
                          <p>
                            <i className="feather-map-pin"></i> Newyork, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="booking-list">
                      <div className="booking-date-list consultation-date-list">
                        <ul>
                          <li>
                            Booking Date: <span>Sun, 30 Aug 2023</span>
                          </li>
                          <li>
                            Booking Time: <span>10.00AM to 11:00AM</span>
                          </li>
                          <li>
                            Type of Consultaion:{" "}
                            <span>
                              <i className="feather-video"></i> Video Consulting
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="success-btn">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary prime-btn"
                  >
                    Add to Google Calendar
                  </a>
                  <a href="javascript:void(0);" className="btn btn-light">
                    Appointment
                  </a>
                </div>
                <div className="success-dashboard-link">
                  <a href="index-2">
                    <i className="fa-solid fa-arrow-left-long"></i> Back to
                    Dashboard
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

export default BookingSuccessOne;
