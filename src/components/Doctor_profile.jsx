import React from "react";
// <link href="/component_assets/img/favicon.png" rel="icon">
// <link rel="stylesheet" href="assets/plugins/fancybox/jquery.fancybox.min.css">
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/plugins/select2/css/select2.min.css";
import "./assets/css/custom.css";
import "./assets/plugins/fancybox/jquery.fancybox.min.css";
const Doctor_profile = () => {
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
                  <li className="has-submenu active">
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
                      <li className="active">
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
                  <li className="has-submenu">
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
                      <li>
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
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item dropdown noti-nav view-cart-header me-3">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link p-0 position-relative"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>{" "}
                    <small className="unread-msg1">7</small>
                  </a>
                  <div className="dropdown-menu notifications dropdown-menu-end">
                    <div className="shopping-cart">
                      <ul className="shopping-cart-items list-unstyled">
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark"></i>
                          </div>
                          <a href="product-description">
                            <img
                              className="avatar-img rounded"
                              src="/component_assets/img/products/product.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="product-description" className="item-name">
                            Benzaxapine Croplex
                          </a>
                          <span className="item-price">$849.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark"></i>
                          </div>
                          <a href="product-description">
                            <img
                              className="avatar-img rounded"
                              src="/component_assets/img/products/product1.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="product-description" className="item-name">
                            Ombinazol Bonibamol
                          </a>
                          <span className="item-price">$1,249.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark"></i>
                          </div>
                          <a href="product-description">
                            <img
                              className="avatar-img rounded"
                              src="/component_assets/img/products/product2.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="product-description" className="item-name">
                            Dantotate Dantodazole
                          </a>
                          <span className="item-price">$129.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                      </ul>
                      <div className="booking-summary pt-3">
                        <div className="booking-item-wrap">
                          <ul className="booking-date">
                            <li>
                              Subtotal <span>$5,877.00</span>
                            </li>
                            <li>
                              Shipping <span>$25.00</span>
                            </li>
                            <li>
                              Tax <span>$0.00</span>
                            </li>
                            <li>
                              Total <span>$5.2555</span>
                            </li>
                          </ul>
                          <div className="booking-total">
                            <ul className="booking-total-list text-align">
                              <li>
                                <div className="clinic-booking pt-3">
                                  <a className="apt-btn" href="cart">
                                    View Cart
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="clinic-booking pt-3">
                                  <a
                                    className="apt-btn"
                                    href="product-checkout"
                                  >
                                    Checkout
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown noti-nav me-3 pe-0">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link p-0"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-bell"></i>{" "}
                    <span className="badge">5</span>
                  </a>
                  <div className="dropdown-menu notifications dropdown-menu-end ">
                    <div className="topnav-dropdown-header">
                      <span className="notification-title">Notifications</span>
                    </div>
                    <div className="noti-content">
                      <ul className="notification-list">
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <span className="avatar">
                                <img
                                  className="avatar-img"
                                  alt="Ruby perin"
                                  src="/component_assets/img/clients/client-01.jpg"
                                />
                              </span>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    18.30 PM
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  Sent a amount of $210 for his Appointment{" "}
                                  <span className="noti-title">Dr.Ruby perin </span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <span className="avatar">
                                <img
                                  className="avatar-img"
                                  alt="Hendry Watt"
                                  src="/component_assets/img/clients/client-02.jpg"
                                />
                              </span>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    12 Min Ago
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  {" "}
                                  has booked her appointment to{" "}
                                  <span className="noti-title">
                                    Dr. Hendry Watt
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <div className="avatar">
                                <img
                                  className="avatar-img"
                                  alt="Maria Dyen"
                                  src="/component_assets/img/clients/client-03.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    6 Min Ago
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  {" "}
                                  Sent a amount $210 for his Appointment{" "}
                                  <span className="noti-title">Dr.Maria Dyen</span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img"
                                  alt="client-image"
                                  src="/component_assets/img/clients/client-04.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">8.30 AM</span>
                                </h6>
                                <p className="noti-details">
                                  {" "}
                                  Send a message to his doctor
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown has-arrow logged-item">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <img
                        className="rounded-circle"
                        src="/component_assets/img/patients/patient.jpg"
                        width="31"
                        alt="Darren Elder"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src="/component_assets/img/patients/patient.jpg"
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Richard Wilson</h6>
                        <p className="text-muted mb-0">Patient</p>
                      </div>
                    </div>
                    <a className="dropdown-item" href="doctor-dashboard">
                      Dashboard
                    </a>
                    <a className="dropdown-item" href="profile-settings">
                      Profile Settings
                    </a>
                    <a className="dropdown-item" href="login">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Doctor Profile</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">Dr. Darren Elder</h4>
                      <p className="doc-speciality">
                        BDS, MDS - Oral & Maxillofacial Surgery
                      </p>
                      <p className="doc-department">
                        <img
                          src="/component_assets/img/specialities/specialities-05.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Dentist
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(35)</span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA -{" "}
                          <a href="javascript:void(0);">Get Directions</a>
                        </p>
                        <ul className="clinic-gallery">
                          <li>
                            <a
                              href="/component_assets/img/features/feature-01.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="/component_assets/img/features/feature-01.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="/component_assets/img/features/feature-02.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="/component_assets/img/features/feature-02.jpg"
                                alt="Feature Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="/component_assets/img/features/feature-03.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="/component_assets/img/features/feature-03.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="/component_assets/img/features/feature-04.jpg"
                              data-fancybox="gallery"
                            >
                              <img
                                src="/component_assets/img/features/feature-04.jpg"
                                alt="Feature"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span>Teeth Whitneing</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up"></i> 99%
                        </li>
                        <li>
                          <i className="far fa-comment"></i> 35 Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 per hour{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="doctor-action">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white fav-btn"
                      >
                        <i className="far fa-bookmark"></i>
                      </a>
                      <a href="chat" className="btn btn-white msg-btn">
                        <i className="far fa-comment-alt"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="fas fa-phone"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <i className="fas fa-video"></i>
                      </a>
                    </div>
                    <div className="clinic-booking">
                      <a className="apt-btn" href="booking">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body pt-0">
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#doc_overview"
                    data-bs-toggle="tab"
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#doc_locations"
                    data-bs-toggle="tab"
                  >
                    Locations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#doc_reviews" data-bs-toggle="tab">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#doc_business_hours"
                    data-bs-toggle="tab"
                  >
                    Business Hours
                  </a>
                </li>
              </ul>
            </nav>

            <div className="tab-content pt-0">
              <div
                role="tabpanel"
                id="doc_overview"
                className="tab-pane fade show active"
              >
                <div className="row">
                  <div className="col-md-12 col-lg-9">
                    <div className="widget about-widget">
                      <h4 className="widget-title">About Me</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>

                    <div className="widget education-widget">
                      <h4 className="widget-title">Education</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  American Dental Medical University
                                </a>
                                <div>BDS</div>
                                <span className="time">1998 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  American Dental Medical University
                                </a>
                                <div>MDS</div>
                                <span className="time">2003 - 2005</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="widget experience-widget">
                      <h4 className="widget-title">Work & Experience</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Glowing Smiles Family Dental Clinic
                                </a>
                                <span className="time">
                                  2010 - Present (5 years)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Comfort Care Dental Clinic
                                </a>
                                <span className="time">2007 - 2010 (3 years)</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Dream Smile Dental Practice
                                </a>
                                <span className="time">2005 - 2007 (2 years)</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="widget awards-widget">
                      <h4 className="widget-title">Awards</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <p className="exp-year">July 2023</p>
                                <h4 className="exp-title">Humanitarian Award</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <p className="exp-year">March 2011</p>
                                <h4 className="exp-title">
                                  Certificate for International Volunteer
                                  Service
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <p className="exp-year">May 2008</p>
                                <h4 className="exp-title">
                                  The Dental Professional of The Year Award
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="service-list">
                      <h4>Services</h4>
                      <ul className="clearfix">
                        <li>Tooth cleaning </li>
                        <li>Root Canal Therapy</li>
                        <li>Implants</li>
                        <li>Composite Bonding</li>
                        <li>Fissure Sealants</li>
                        <li>Surgical Extractions</li>
                      </ul>
                    </div>

                    <div className="service-list">
                      <h4>Specializations</h4>
                      <ul className="clearfix">
                        <li>Children Care</li>
                        <li>Dental Care</li>
                        <li>Oral and Maxillofacial Surgery </li>
                        <li>Orthodontist</li>
                        <li>Periodontist</li>
                        <li>Prosthodontics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" id="doc_locations" className="tab-pane fade">
                <div className="location-list">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="clinic-content">
                        <h4 className="clinic-name">
                          <a href="#">Smile Cute Dental Care Center</a>
                        </h4>
                        <p className="doc-speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">(4)</span>
                        </div>
                        <div className="clinic-details mb-0">
                          <h5 className="clinic-direction">
                            {" "}
                            <i className="fas fa-map-marker-alt"></i> 2286 Sundown
                            Lane, Austin, Texas 78749, USA <br />
                            <a href="javascript:void(0);">Get Directions</a>
                          </h5>
                          <ul>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-01.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-01.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-02.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-02.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-03.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-03.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-04.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-04.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="clinic-timing">
                        <div>
                          <p className="timings-days">
                            <span> Mon - Sat </span>
                          </p>
                          <p className="timings-times">
                            <span>10:00 AM - 2:00 PM</span>
                            <span>4:00 PM - 9:00 PM</span>
                          </p>
                        </div>
                        <div>
                          <p className="timings-days">
                            <span>Sun</span>
                          </p>
                          <p className="timings-times">
                            <span>10:00 AM - 2:00 PM</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="consult-price">$250</div>
                    </div>
                  </div>
                </div>

                <div className="location-list">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="clinic-content">
                        <h4 className="clinic-name">
                          <a href="#">The Family Dentistry Clinic</a>
                        </h4>
                        <p className="doc-speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">(4)</span>
                        </div>
                        <div className="clinic-details mb-0">
                          <p className="clinic-direction">
                            {" "}
                            <i className="fas fa-map-marker-alt"></i> 2883
                            University Street, Seattle, Texas Washington, 98155{" "}
                            <br />
                            <a href="javascript:void(0);">Get Directions</a>
                          </p>
                          <ul>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-01.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-01.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-02.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-02.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-03.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-03.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="/component_assets/img/features/feature-04.jpg"
                                data-fancybox="gallery2"
                              >
                                <img
                                  src="/component_assets/img/features/feature-04.jpg"
                                  alt="Feature Image"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="clinic-timing">
                        <div>
                          <p className="timings-days">
                            <span> Tue - Fri </span>
                          </p>
                          <p className="timings-times">
                            <span>11:00 AM - 1:00 PM</span>
                            <span>6:00 PM - 11:00 PM</span>
                          </p>
                        </div>
                        <div>
                          <p className="timings-days">
                            <span>Sat - Sun</span>
                          </p>
                          <p className="timings-times">
                            <span>8:00 AM - 10:00 AM</span>
                            <span>3:00 PM - 7:00 PM</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="consult-price">$350</div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" id="doc_reviews" className="tab-pane fade">
                <div className="widget review-listing">
                  <ul className="comments-list">
                    <li>
                      <div className="comment">
                        <img
                          className="avatar avatar-sm rounded-circle"
                          alt="User Image"
                          src="/component_assets/img/patients/patient.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Richard Wilson</span>
                            <span className="comment-date">
                              Reviewed 2 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <p className="recommended">
                            <i className="far fa-thumbs-up"></i> I recommend the
                            doctor
                          </p>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply"></i> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up"></i> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down"></i> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <ul className="comments-reply">
                        <li>
                          <div className="comment">
                            <img
                              className="avatar avatar-sm rounded-circle"
                              alt="User Image"
                              src="/component_assets/img/patients/patient1.jpg"
                            />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">
                                  Charlene Reed
                                </span>
                                <span className="comment-date">
                                  Reviewed 3 Days ago
                                </span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam. Curabitur non nulla sit
                                amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply"></i> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up"></i> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down"></i> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div className="comment">
                        <img
                          className="avatar avatar-sm rounded-circle"
                          alt="User Image"
                          src="/component_assets/img/patients/patient2.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Travis Trimble</span>
                            <span className="comment-date">
                              Reviewed 4 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply"></i> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up"></i> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down"></i> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="all-feedback text-center">
                    <a href="#" className="btn btn-primary btn-sm">
                      Show all feedback <strong>(167)</strong>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="write-review">
                    <h4>
                      Write a review for <strong>Dr. Darren Elder</strong>
                    </h4>

                    <form />
                    <div className="mb-3">
                      <label className="mb-2">Review</label>
                      <div className="star-rating">
                        <input
                          id="star-5"
                          type="radio"
                          name="rating"
                          value="star-5"
                        />
                        <label for="star-5" title="5 stars">
                          <i className="active fa fa-star"></i>
                        </label>
                        <input
                          id="star-4"
                          type="radio"
                          name="rating"
                          value="star-4"
                        />
                        <label for="star-4" title="4 stars">
                          <i className="active fa fa-star"></i>
                        </label>
                        <input
                          id="star-3"
                          type="radio"
                          name="rating"
                          value="star-3"
                        />
                        <label for="star-3" title="3 stars">
                          <i className="active fa fa-star"></i>
                        </label>
                        <input
                          id="star-2"
                          type="radio"
                          name="rating"
                          value="star-2"
                        />
                        <label for="star-2" title="2 stars">
                          <i className="active fa fa-star"></i>
                        </label>
                        <input
                          id="star-1"
                          type="radio"
                          name="rating"
                          value="star-1"
                        />
                        <label for="star-1" title="1 star">
                          <i className="active fa fa-star"></i>
                        </label>

                        <div className="mb-3">
                          <label className="mb-2">Title of your review</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="If you could say it in one sentence, what would you say?"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="mb-2">Your review</label>
                          <textarea
                            id="review_desc"
                            maxlength="100"
                            className="form-control"
                          ></textarea>
                          <div className="d-flex justify-content-between mt-3">
                            <small className="text-muted">
                              <span id="chars">100</span> characters remaining
                            </small>
                          </div>
                        </div>
                        <hr />
                        <div className="mb-3">
                          <div className="terms-accept">
                            <div className="custom-checkbox">
                              <input type="checkbox" id="terms_accept" />
                              <label for="terms_accept">
                                I have read and accept{" "}
                                <a href="#">Terms &amp; Conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                          >
                            Add Review
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      role="tabpanel"
                      id="doc_business_hours"
                      className="tab-pane fade"
                    >
                      <div className="row">
                        <div className="col-md-6 offset-md-3">
                          <div className="widget business-widget">
                            <div className="widget-content">
                              <div className="listing-hours">
                                <div className="listing-day current">
                                  <div className="day">
                                    Today <span>5 Nov 2023</span>
                                  </div>
                                  <div className="time-items">
                                    <span className="open-status">
                                      <span className="badge bg-success-light">
                                        Open Now
                                      </span>
                                    </span>
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day">
                                  <div className="day">Monday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day">
                                  <div className="day">Tuesday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day">
                                  <div className="day">Wednesday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day">
                                  <div className="day">Thursday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day">
                                  <div className="day">Friday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day">
                                  <div className="day">Saturday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      07:00 AM - 09:00 PM
                                    </span>
                                  </div>
                                </div>
                                <div className="listing-day closed">
                                  <div className="day">Sunday</div>
                                  <div className="time-items">
                                    <span className="time">
                                      <span className="badge bg-danger-light">
                                        Closed
                                      </span>
                                    </span>
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
                          <img src="/component_assets/img/logo.png" alt="Logo" />
                        </a>
                      </div>
                      <div className="footer-about-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore.
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
                                <i className="feather-map-pin"></i> 3556 Beech
                                Street, USA
                              </p>
                            </div>
                            <div className="footer-address">
                              <p>
                                <i className="feather-phone-call"></i> +1 315 369
                                5943
                              </p>
                            </div>
                            <div className="footer-address mb-0">
                              <p>
                                <i className="feather-mail"></i>{" "}
                                <a
                                  href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="dfbbb0bcbcaaadba9fbaa7beb2afb3baf1bcb0b2"
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
                            <a href="terms-condition">
                              Terms and Conditions
                            </a>
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

        <div className="modal fade call-modal" id="voice_call">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img
                          alt="User Image"
                          src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                          className="call-avatar"
                        />
                        <h4>Dr. Darren Elder</h4>
                        <span>Connecting...</span>
                      </div>
                      <div className="call-items">
                        <a
                          href="javascript:void(0);"
                          className="btn call-item call-end"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="material-icons">call_end</i>
                        </a>
                        <a
                          href="voice-call"
                          className="btn call-item call-start"
                        >
                          <i className="material-icons">call</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade call-modal" id="video_call">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img
                          className="call-avatar"
                          src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                        />
                        <h4>Dr. Darren Elder</h4>
                        <span>Calling ...</span>
                      </div>
                      <div className="call-items">
                        <a
                          href="javascript:void(0);"
                          className="btn call-item call-end"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="material-icons">call_end</i>
                        </a>
                        <a
                          href="video-call"
                          className="btn call-item call-start"
                        >
                          <i className="material-icons">videocam</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script
          data-cfasync="false"
          src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        ></script>
        <script src="assets/js/jquery-3.7.0.min.js"></script>

        <script src="assets/js/bootstrap.bundle.min.js"></script>

        <script src="assets/plugins/fancybox/jquery.fancybox.min.js"></script>

        <script src="assets/js/script.js"></script>
      </div>
    </div>
  );
};

export default Doctor_profile;
