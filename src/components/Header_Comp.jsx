import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/plugins/select2/css/select2.min.css";
import "./assets/css/custom.css";
import {Link} from "react-router-dom"


<link rel="shortcut icon" to="/component_assets/img/favicon.png" type="image/x-icon" />;
const Header_Comp = () => {
  return (
    <div className="main-wrapper home-ten">
      <header className="header header-custom header-fixed header-ten">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="index-2" className="navbar-brand logo">
                <img
                  src="./component_assets/img/logo-white.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="index-2" className="menu-logo">
                  <img
                    src="./component_assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
              <ul className="main-nav">
                <li className="">
                  <Link to="App.js">Home </Link>
                </li>
                <li>
                  <Link to="doctor/login">Doctors</Link>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Patients <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <Link to="map-grid">Doctors</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="search">Search Doctor</Link>
                    </li>
                    <li>
                      <Link to="doctor-profile">Doctor Profile</Link>
                    </li>
                    <li>
                      <Link to="booking">Booking</Link>
                    </li>
                    <li>
                      <Link to="checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="booking-success">Booking Success</Link>
                    </li>
                    <li>
                      <Link to="patient-dashboard">Patient Dashboard</Link>
                    </li>
                    <li>
                      <Link to="favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link to="chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="profile-settings">Profile Settings</Link>
                    </li>
                    <li>
                      <Link to="change-password">Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Pharmacy <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="doctor/pharmacy-index">Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="doctor/pharmacy-details">Pharmacy Details</Link>
                    </li>
                    <li>
                      <Link to="doctor/pharmacy-search">Pharmacy Search</Link>
                    </li>
                    <li>
                      <Link to="product-all">Product</Link>
                    </li>
                    <li>
                      <Link to="product-description">Product Description</Link>
                    </li>
                    <li>
                      <Link to="cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="product-checkout">Product Checkout</Link>
                    </li>
                    <li>
                      <Link to="payment-success">Payment Success</Link>
                    </li>
                    <li>
                      <Link to="pharmacy-register">Pharmacy Register</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Pages <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="contact-us">Contact Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Call</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="voice-call">Voice Call</Link>
                        </li>
                        <li>
                          <Link to="video-call">Video Call</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="terms-condition">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Blog <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="blog-list">Blog List</Link>
                    </li>
                    <li>
                      <Link to="blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link to="blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/admin">
                    Admin <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/admin" target="_blank">
                        Admin
                      </Link>
                    </li>
                    <li>
                      <Link to="pharmacy/index" target="_blank">
                        Pharmacy Admin
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="searchbar">
                  <Link to="#">
                    <i className="feather-search"></i>
                  </Link>
                  <div className="togglesearch">
                    <form action="https://doccure.dreamguystech.com/html/template/search-2">
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <button type="submit" className="btn btn-primary">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="login-link">
                  <Link to="login-email">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="register-btn">
                <Link to="login-email" className="btn log-btn">
                  <i className="feather-lock"></i>Login
                </Link>
              </li>
              <li className="register-btn">
                <Link to="signup" className="btn reg-btn">
                  <i className="feather-user"></i>Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header_Comp;
