import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/plugins/select2/css/select2.min.css";
import "./assets/css/custom.css";
<link href="/component_assets/img/favicon.png" rel="icon" />;

const BlankPage = () => {
  return (
    <div>
      <div className="main-wrapper">
        <header className="header header-custom header-fixed header-one">
          <div className="container">
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
                    <img
                      src="/component_assets/img/logo.png"
                      className="img-fluid"
                      alt="Logo"
                    />
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
                  <li className="has-submenu megamenu">
                    <a href="javascript:void(0);">
                      Home <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu mega-submenu">
                      <li>
                        <div className="megamenu-wrapper">
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-2" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-11.jpg"
                                      className="img-fluid "
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-2" className="inner-demo-img">
                                    General Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo ">
                                <div className="demo-img">
                                  <a href="index-3" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-10.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-3" className="inner-demo-img">
                                    General Home 2
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-4" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-09.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-4" className="inner-demo-img">
                                    General Home 3
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-5" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-08.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-5" className="inner-demo-img">
                                    General Home 4
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-6" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-07.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-6" className="inner-demo-img">
                                    Cardiology Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-7" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-06.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-7" className="inner-demo-img">
                                    Eye Care Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-8" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-05.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-8" className="inner-demo-img">
                                    Veterinary Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-9" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-04.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-9" className="inner-demo-img">
                                    Paediatric Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-10" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-03.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-10" className="inner-demo-img">
                                    Fertility Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-11" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-02.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-11" className="inner-demo-img">
                                    ENT Hospital Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a href="index-12" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-01.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a href="index-12" className="inner-demo-img">
                                    Cosmetics Home
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Doctors <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="doctor-dashboard">Doctor Dashboard</a>
                      </li>
                      <li>
                        <a href="appointments">Appointments</a>
                      </li>
                      <li>
                        <a href="schedule-timings">Schedule Timing</a>
                      </li>
                      <li>
                        <a href="my-patients">Patients List</a>
                      </li>
                      <li>
                        <a href="patient-profile">Patients Profile</a>
                      </li>
                      <li>
                        <a href="chat-doctor">Chat</a>
                      </li>
                      <li>
                        <a href="invoices">Invoices</a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings">
                          Profile Settings
                        </a>
                      </li>
                      <li>
                        <a href="reviews">Reviews</a>
                      </li>
                      <li>
                        <a href="doctor-register">Doctor Register</a>
                      </li>
                      <li className="has-submenu">
                        <a href="doctor-blog">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="doctor-blog">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details">Blog view</a>
                          </li>
                          <li>
                            <a href="doctor-add-blog">Add Blog</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Patients <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Doctors</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="map-grid">Map Grid</a>
                          </li>
                          <li>
                            <a href="map-list">Map List</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Search Doctor</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="search">Search Doctor 1</a>
                          </li>
                          <li>
                            <a href="search-2">Search Doctor 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="doctor-profile">Doctor Profile</a>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Booking</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="booking">Booking 1</a>
                          </li>
                          <li>
                            <a href="booking-2">Booking 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="checkout">Checkout</a>
                      </li>
                      <li>
                        <a href="booking-success">Booking Success</a>
                      </li>
                      <li>
                        <a href="patient-dashboard">Patient Dashboard</a>
                      </li>
                      <li>
                        <a href="favourites">Favourites</a>
                      </li>
                      <li>
                        <a href="chat">Chat</a>
                      </li>
                      <li>
                        <a href="profile-settings">Profile Settings</a>
                      </li>
                      <li>
                        <a href="change-password">Change Password</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Pharmacy <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="pharmacy-index">Pharmacy</a>
                      </li>
                      <li>
                        <a href="pharmacy-details">Pharmacy Details</a>
                      </li>
                      <li>
                        <a href="pharmacy-search">Pharmacy Search</a>
                      </li>
                      <li>
                        <a href="product-all">Product</a>
                      </li>
                      <li>
                        <a href="product-description">
                          Product Description
                        </a>
                      </li>
                      <li>
                        <a href="cart">Cart</a>
                      </li>
                      <li>
                        <a href="product-checkout">Product Checkout</a>
                      </li>
                      <li>
                        <a href="payment-success">Payment Success</a>
                      </li>
                      <li>
                        <a href="pharmacy-register">Pharmacy Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu active">
                    <a href="javascript:void(0);">
                      Pages <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="about-us">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us">Contact Us</a>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Call</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="voice-call">Voice Call</a>
                          </li>
                          <li>
                            <a href="video-call">Video Call</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Invoices</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="invoices">Invoices</a>
                          </li>
                          <li>
                            <a href="invoice-view">Invoice View</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Authentication</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="login-email">Login Email</a>
                          </li>
                          <li>
                            <a href="login-phone">Login Phone</a>
                          </li>
                          <li>
                            <a href="doctor-signup">Doctor Signup</a>
                          </li>
                          <li>
                            <a href="patient-signup">Patient Signup</a>
                          </li>
                          <li>
                            <a href="forgot-password">Forgot Password 1</a>
                          </li>
                          <li>
                            <a href="forgot-password2">Forgot Password 2</a>
                          </li>
                          <li>
                            <a href="login-email-otp">Email OTP</a>
                          </li>
                          <li>
                            <a href="login-phone-otp">Phone OTP</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Error Pages</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="error-404">404 Error</a>
                          </li>
                          <li>
                            <a href="error-500">500 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="active">
                        <a href="blank-page">Starter Page</a>
                      </li>
                      <li>
                        <a href="pricing">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="faq">FAQ</a>
                      </li>
                      <li>
                        <a href="maintenance">Maintenance</a>
                      </li>
                      <li>
                        <a href="coming-soon">Coming Soon</a>
                      </li>
                      <li>
                        <a href="terms-condition">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="components">Components</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">
                      Blog <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-list">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-grid">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">
                      Admin <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="admin/index" target="_blank">
                          Admin
                        </a>
                      </li>
                      <li>
                        <a href="pharmacy/index" target="_blank">
                          Pharmacy Admin
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="searchbar">
                    <a href="javascript:void(0);">
                      <i className="feather-search"></i>
                    </a>
                    <div className="togglesearch">
                      <form action="https://doccure.dreamguystech.com/html/template/search">
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <button type="submit" className="btn">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="login-link">
                    <a href="login">Login / Signup</a>
                  </li>
                  <li className="register-btn">
                    <a href="register" className="btn reg-btn">
                      <i className="feather-user"></i>Register
                    </a>
                  </li>
                  <li className="register-btn">
                    <a href="login" className="btn btn-primary log-btn">
                      <i className="feather-lock"></i>Login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Blank Page</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Blank Page
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5>Blank Page</h5>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer footer-one">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <a href="index-2">
                        <img src="/component_assets/img/logo.png" alt="logo" />
                      </a>
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Patients</h2>
                        <ul>
                          <li>
                            <a href="search">Search for Doctors</a>
                          </li>
                          <li>
                            <a href="login">Login</a>
                          </li>
                          <li>
                            <a href="register">Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Doctors</h2>
                        <ul>
                          <li>
                            <a href="appointments">Appointments</a>
                          </li>
                          <li>
                            <a href="chat">Chat</a>
                          </li>
                          <li>
                            <a href="login">Login</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-4">
                      <div className="footer-widget footer-contact">
                        <h2 className="footer-title">Contact Us</h2>
                        <div className="footer-contact-info">
                          <div className="footer-address">
                            <p>
                              <i className="feather-map-pin"></i> 3556 Beech Street,
                              USA
                            </p>
                          </div>
                          <div className="footer-address">
                            <p>
                              <i className="feather-phone-call"></i> +1 315 369 5943
                            </p>
                          </div>
                          <div className="footer-address mb-0">
                            <p>
                              <i className="feather-mail"></i>{" "}
                              <a
                                href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="2f4b404c4c5a5d4a6f4a574e425f434a014c4042"
                              >
                                [email&#160;protected]
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-7">
                  <div className="footer-widget">
                    <h2 className="footer-title">Join Our Newsletter</h2>
                    <div className="subscribe-form">
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">
                        {" "}
                        Copyright © 2023{" "}
                        <a
                          href="https://themeforest.net/user/dreamguys/portfolio"
                          target="_blank"
                        >
                          Dreamguys.
                        </a>{" "}
                        All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <a href="privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="terms-condition">Terms and Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <script
        data-cfasync="false"
        src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="assets/js/jquery-3.7.0.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default BlankPage;
