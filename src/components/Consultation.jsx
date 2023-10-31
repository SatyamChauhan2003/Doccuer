import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/css/custom.css";
<link rel="shortcut icon" href="/component_assets/img/favicon.png" type="image/x-icon" />;
const Consultation = () => {
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
                  <a href="paitent-details">
                    <i className="fa-solid fa-arrow-left-long"></i> Back
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="paitent-header">
                  <h4 className="paitent-title">Type of Consultation</h4>
                </div>
                <div className="consultation-grid">
                  <div className="consultation-info">
                    <p>Online Consultation</p>
                    <div className="consultation-list">
                      <ul>
                        <li>
                          <div className="consultation-types active">
                            <a href="javascript:void(0);">
                              <i className="feather-video"></i> Video Consulting
                            </a>
                            <span>
                              <i className="fas fa-circle-check"></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="consultation-types">
                            <a href="javascript:void(0);">
                              <i className="feather-mic"></i> Audio Consulting
                            </a>
                            <span>
                              <i className="fas fa-circle-check"></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="consultation-types">
                            <a href="javascript:void(0);">
                              <i className="feather-message-square"></i> Chat
                              Consulting
                            </a>
                            <span>
                              <i className="fas fa-circle-check"></i>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="consultation-info">
                    <p>Home Visit</p>
                    <div className="consultation-list">
                      <ul>
                        <li>
                          <div className="consultation-types">
                            <a href="javascript:void(0);">
                              <i className="feather-home"></i> Home Visit
                            </a>
                            <span>
                              <i className="fas fa-circle-check"></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="consultation-types">
                            <a href="javascript:void(0);">
                              <i className="feather-users"></i> Consult Instatly
                            </a>
                            <span>
                              <i className="fas fa-circle-check"></i>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="booking-btn">
                  <a
                    href="payment"
                    className="btn btn-primary prime-btn justify-content-center align-items-center"
                  >
                    Next <i className="feather-arrow-right-circle"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                  </div>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body">
                    <div className="booking-doctor-details">
                      <div className="booking-doctor-left">
                        <div className="booking-doctor-img">
                          <a href="javascript:void(0);">
                            <img
                              src="/component_assets/img/patients/patient3.jpg"
                              alt="John Smith"
                            />
                          </a>
                        </div>
                        <div className="booking-doctor-info">
                          <h4>
                            <a href="profile-settings">John Smith</a>
                          </h4>
                          <p>P123456</p>
                        </div>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <a href="profile-settings">Edit</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body">
                    <div className="booking-doctor-details">
                      <div className="booking-device">
                        <div className="booking-device-img">
                          <img
                            src="/component_assets/img/icons/device-message.svg"
                            alt="device-message-image"
                          />
                        </div>
                        <div className="booking-doctor-info">
                          <h3>We can help you</h3>
                          <p className="device-text">
                            Call us +1 888-888-8888 (or) chat with our customer
                            support team.
                          </p>
                          <a href="chat" className="btn">
                            Chat With Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card booking-card mb-0">
                  <div className="card-body booking-card-body">
                    <div className="booking-doctor-details">
                      <div className="booking-device">
                        <div className="booking-device-img">
                          <img
                            src="/component_assets/img/icons/smart-phone.svg"
                            alt="smart-phone"
                          />
                        </div>
                        <div className="booking-doctor-info">
                          <h3>Get the App</h3>
                          <p className="device-text">
                            Download our app for better experience and for more
                            feature
                          </p>
                          <div className="app-images">
                            <a href="javascript:void(0);">
                              <img
                                src="/component_assets/img/google-img.svg"
                                alt="google-image"
                              />
                            </a>
                            <a href="javascript:void(0);">
                              <img
                                src="/component_assets/img/app-img.svg"
                                alt="app-image"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Consultation;
