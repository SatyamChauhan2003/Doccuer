import React from "react";

const Signup = () => {
  return (
    <div className="login-body">
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
                  <a href="javascript:void(0);">FAQ</a>
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

        <div className="login-content-info">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="account-content">
                  <div className="login-shapes">
                    <div className="shape-img-left">
                      <img src="/component_assets/img/shape-01.png" alt="shape-image" />
                    </div>
                    <div className="shape-img-right">
                      <img src="/component_assets/img/shape-02.png" alt="shape-image" />
                    </div>
                  </div>
                  <div className="account-info">
                    <div className="login-back">
                      <a href="login-email">
                        <i className="fa-solid fa-arrow-left-long"></i> Back to
                        Login
                      </a>
                    </div>
                    <div className="login-title">
                      <h3>Signup</h3>
                    </div>
                    <div className="signup-option-btns">
                      <a href="doctor-signup" className="signup-btn-info">
                        <div className="signup-info">
                          <div className="signup-icon">
                            <img
                              src="/component_assets/img/icons/doctor-icon.svg"
                              alt="doctor-icon"
                            />
                          </div>
                          <div className="signup-content">
                            <h4>Doctor</h4>
                            <p>Lorem ipsum amet, consectetur</p>
                          </div>
                        </div>
                        <div className="signup-arrow">
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </a>
                      <a href="patient-signup" className="signup-btn-info">
                        <div className="signup-info">
                          <div className="signup-icon">
                            <img
                              src="/component_assets/img/icons/patient-icon.svg"
                              alt="patient-icon"
                            />
                          </div>
                          <div className="signup-content">
                            <h4>Patient</h4>
                            <p>Lorem ipsum amet, consectetur</p>
                          </div>
                        </div>
                        <div className="signup-arrow">
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </a>
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

export default Signup;
