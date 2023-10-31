import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/plugins/select2/css/select2.min.css";
import "./assets/css/custom.css";
import {Link} from "react-router-dom"
<link to="/component_assets/img/favicon.png" rel="icon" />;

const Accounts = () => {
  return (
    <div>
      <div className="main-wrapper">
        <header className="header header-custom header-fixed header-one">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link id="mobile_btn" to="/">
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Link>
                <Link to="/" className="navbar-brand logo">
                  <img src="/component_assets/img/logo.png" className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/" className="menu-logo">
                    <img
                      src="/component_assets/img/logo.png"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </Link>
                  <Link
                    id="menu_close"
                    className="menu-close"
                    to="/"
                  >
                    <i className="fas fa-times"></i>
                  </Link>
                </div>
                <ul className="main-nav">
                  <li className="has-submenu megamenu">
                    <Link to="/">
                      Home <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu mega-submenu">
                      <li>
                        <div className="megamenu-wrapper">
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-11.jpg"
                                      className="img-fluid "
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    General Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo ">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-10.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    General Home 2
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-09.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    General Home 3
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-08.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    General Home 4
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-07.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    Cardiology Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-06.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    Eye Care Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-05.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    Veterinary Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-04.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    Paediatric Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-03.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    Fertility Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-02.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    ENT Hospital Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <Link to="/" className="inner-demo-img">
                                    <img
                                      src="/component_assets/img/home-01.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link to="/" className="inner-demo-img">
                                    Cosmetics Home
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <Link to="/">
                      Doctors <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="doctor-dashboard">Doctor Dashboard</Link>
                      </li>
                      <li>
                        <Link to="appointments">Appointments</Link>
                      </li>
                      <li>
                        <Link to="schedule-timings">Schedule Timing</Link>
                      </li>
                      <li>
                        <Link to="my-patients">Patients List</Link>
                      </li>
                      <li>
                        <Link to="patient-profile">Patients Profile</Link>
                      </li>
                      <li>
                        <Link to="chat-doctor">Chat</Link>
                      </li>
                      <li>
                        <Link to="invoices-comp">Invoices</Link>
                      </li>
                      <li>
                        <Link to="doctor-profile-settings">
                          Profile Settings
                        </Link>
                      </li>
                      <li>
                        <Link to="reviews">Reviews</Link>
                      </li>
                      <li>
                        <Link to="doctor-register">Doctor Register</Link>
                      </li>
                      <li className="has-submenu">
                        <Link to="doctor-blog">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="doctor-blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="blog-details">Blog view</Link>
                          </li>
                          <li>
                            <Link to="doctor-add-blog">Add Blog</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <Link to="/">
                      Patients <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu">
                      <li className="has-submenu">
                        <Link to="/">Doctors</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="map-grid">Map Grid</Link>
                          </li>
                          <li>
                            <Link to="map-list">Map List</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link to="/">Search Doctor</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="search">Search Doctor 1</Link>
                          </li>
                          <li>
                            <Link to="search-2">Search Doctor 2</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="doctor-profile">Doctor Profile</Link>
                      </li>
                      <li className="has-submenu">
                        <Link to="/">Booking</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="booking">Booking 1</Link>
                          </li>
                          <li>
                            <Link to="booking-2">Booking 2</Link>
                          </li>
                        </ul>
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
                    <Link to="/">
                      Pharmacy <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="pharmacy-index">Pharmacy</Link>
                      </li>
                      <li>
                        <Link to="pharmacy-details">Pharmacy Details</Link>
                      </li>
                      <li>
                        <Link to="pharmacy-search">Pharmacy Search</Link>
                      </li>
                      <li>
                        <Link to="product-all">Product</Link>
                      </li>
                      <li>
                        <Link to="product-description">
                          Product Description
                        </Link>
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
                    <Link to="/">
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
                        <Link to="/">Call</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="voice-call">Voice Call</Link>
                          </li>
                          <li>
                            <Link to="video-call">Video Call</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link to="/">Invoices</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="invoices">Invoices</Link>
                          </li>
                          <li>
                            <Link to="invoice-view">Invoice View</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link to="/">Authentication</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="login-email">Login Email</Link>
                          </li>
                          <li>
                            <Link to="login-phone">Login Phone</Link>
                          </li>
                          <li>
                            <Link to="doctor-signup">Doctor Signup</Link>
                          </li>
                          <li>
                            <Link to="patient-signup">Patient Signup</Link>
                          </li>
                          <li>
                            <Link to="forgot-password">Forgot Password 1</Link>
                          </li>
                          <li>
                            <Link to="forgot-password2">Forgot Password 2</Link>
                          </li>
                          <li>
                            <Link to="login-email-otp">Email OTP</Link>
                          </li>
                          <li>
                            <Link to="login-phone-otp">Phone OTP</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link to="/">Error Pages</Link>
                        <ul className="submenu inner-submenu">
                          <li>
                            <Link to="error-404">404 Error</Link>
                          </li>
                          <li>
                            <Link to="error-500">500 Error</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="blank-page">Starter Page</Link>
                      </li>
                      <li>
                        <Link to="pricing">Pricing Plan</Link>
                      </li>
                      <li>
                        <Link to="faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="maintenance">Maintenance</Link>
                      </li>
                      <li>
                        <Link to="coming-soon">Coming Soon</Link>
                      </li>
                      <li>
                        <Link to="terms-condition">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link to="privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="components">Components</Link>
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
                    <Link to="#">
                      Admin <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="admin/index" target="_blank">
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
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item dropdown noti-nav view-cart-header me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle nav-link p-0 position-relative"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>{" "}
                    <small className="unread-msg1">7</small>
                  </Link>
                  <div className="dropdown-menu notifications dropdown-menu-end">
                    <div className="shopping-cart">
                      <ul className="shopping-cart-items list-unstyled">
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark"></i>
                          </div>
                          <Link to="product-description">
                            <img
                              className="avatar-img rounded"
                              src="/component_assets/img/products/product.jpg"
                              alt="User Image"
                            />
                          </Link>
                          <Link to="product-description" className="item-name">
                            Benzaxapine Croplex
                          </Link>
                          <span className="item-price">$849.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark"></i>
                          </div>
                          <Link to="product-description">
                            <img
                              className="avatar-img rounded"
                              src="/component_assets/img/products/product1.jpg"
                              alt="User Image"
                            />
                          </Link>
                          <Link to="product-description" className="item-name">
                            Ombinazol Bonibamol
                          </Link>
                          <span className="item-price">$1,249.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark"></i>
                          </div>
                          <Link to="product-description">
                            <img
                              className="avatar-img rounded"
                              src="/component_assets/img/products/product2.jpg"
                              alt="User Image"
                            />
                          </Link>
                          <Link to="product-description" className="item-name">
                            Dantotate Dantodazole
                          </Link>
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
                                  <Link className="apt-btn" to="cart">
                                    View Cart
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="clinic-booking pt-3">
                                  <Link
                                    className="apt-btn"
                                    to="product-checkout"
                                  >
                                    Checkout
                                  </Link>
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
                  <Link
                    to="#"
                    className="dropdown-toggle nav-link p-0"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-bell"></i>{" "}
                    <span className="badge">5</span>
                  </Link>
                  <div className="dropdown-menu notifications dropdown-menu-end ">
                    <div className="topnav-dropdown-header">
                      <span className="notification-title">Notifications</span>
                    </div>
                    <div className="noti-content">
                      <ul className="notification-list">
                        <li className="notification-message">
                          <Link to="#">
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
                          </Link>
                        </li>
                        <li className="notification-message">
                          <Link to="#">
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
                          </Link>
                        </li>
                        <li className="notification-message">
                          <Link to="#">
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
                          </Link>
                        </li>
                        <li className="notification-message">
                          <Link to="#">
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
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown has-arrow logged-item">
                  <Link
                    to="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <img
                        className="rounded-circle"
                        src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                        width="31"
                        alt="Darren Elder"
                      />
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Darren Elder</h6>
                        <p className="text-muted mb-0">Doctor</p>
                      </div>
                    </div>
                    <Link className="dropdown-item" to="doctor-dashboard">
                      Dashboard
                    </Link>
                    <Link className="dropdown-item" to="doctor-profile-settings">
                      Profile Settings
                    </Link>
                    <Link className="dropdown-item" to="login">
                      Logout
                    </Link>
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
                <h2 className="breadcrumb-title">Accounts</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Accounts
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
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <Link to="#" className="booking-doc-img">
                        <img
                          src="/component_assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="profile-det-info">
                        <h3>Dr. Darren Elder</h3>
                        <div className="patient-details">
                          <h5 className="mb-0">
                            BDS, MDS - Oral & Maxillofacial Surgery
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <Link to="doctor-dashboard">
                            <i className="fas fa-columns"></i>
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="appointments">
                            <i className="fas fa-calendar-check"></i>
                            <span>Appointments</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="my-patients">
                            <i className="fas fa-user-injured"></i>
                            <span>My Patients</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="schedule-timings">
                            <i className="fas fa-hourglass-start"></i>
                            <span>Schedule Timings</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="available-timings">
                            <i className="fas fa-clock"></i>
                            <span>Available Timings</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="invoices">
                            <i className="fas fa-file-invoice"></i>
                            <span>Invoices</span>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="accounts">
                            <i className="fas fa-file-invoice-dollar"></i>
                            <span>Accounts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="reviews">
                            <i className="fas fa-star"></i>
                            <span>Reviews</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="chat-doctor">
                            <i className="fas fa-comments"></i>
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </Link>
                        </li>
                        <li>
                          <Link to="doctor-profile-settings">
                            <i className="fas fa-user-cog"></i>
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="social-media">
                            <i className="fas fa-share-alt"></i>
                            <span>Social Media</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="doctor-change-password">
                            <i className="fas fa-lock"></i>
                            <span>Change Password</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="login">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-lg-5 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-sm-6">
                            <h3 className="card-title">Account</h3>
                          </div>
                          <div className="col-sm-6">
                            <div>
                              <Link
                                title="Edit Profile"
                                className="btn btn-primary btn-sm"
                                to="#account_modal"
                                data-bs-toggle="modal"
                              >
                                <i className="fas fa-pencil"></i> Edit Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="profile-view-bottom">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Bank Name</div>
                                <div className="text" id="bank_name">
                                  Wells Fargo & Co
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Branch Name</div>
                                <div className="text" id="branch_name">
                                  Lenexa
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Number</div>
                                <div className="text" id="account_no">
                                  5396 5250 1908 3838
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Name</div>
                                <div className="text" id="account_name">
                                  Dr. Darren Elder
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="card flex-fill">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="account-card bg-success-light">
                              <span>$90.48</span> Earned
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="account-card bg-warning-light">
                              <span>$0.00</span> Requested
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="account-card bg-purple-light">
                              <span>$90.48</span> Balance
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <Link
                              to="#payment_request_modal"
                              className="btn btn-primary request_btn"
                              data-bs-toggle="modal"
                            >
                              Payment Request
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body pt-0">
                        <nav className="user-tabs mb-4">
                          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                to="#pat_accounts"
                                data-bs-toggle="tab"
                              >
                                Accounts
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#pat_refundrequest"
                                data-bs-toggle="tab"
                              >
                                Patients Refund Request
                              </Link>
                            </li>
                          </ul>
                        </nav>

                        <div className="tab-content pt-0">
                          <div
                            id="pat_accounts"
                            className="tab-pane fade show active"
                          >
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          3 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            11.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient1.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Charlene Reed <span>#PT0001</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$200</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          1 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            1.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient2.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Travis Trimble{" "}
                                              <span>#PT0002</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$75</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          30 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            9.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient3.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Carl Kelly <span>#PT0003</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$100</td>
                                        <td>
                                          <span className="badge rounded-pill bg-warning-light">
                                            Pending
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          28 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            6.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient4.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Michelle Fairfax{" "}
                                              <span>#PT0004</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$350</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          27 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            8.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient5.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Gina Moore <span>#PT0005</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$250</td>
                                        <td>
                                          <span className="badge rounded-pill bg-danger-light">
                                            Refunded
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="tab-pane fade" id="pat_refundrequest">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          3 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            11.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient1.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Charlene Reed <span>#PT0001</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$200</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          1 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            1.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient2.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Travis Trimble{" "}
                                              <span>#PT0002</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$75</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          30 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            9.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient3.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Carl Kelly <span>#PT0003</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$100</td>
                                        <td>
                                          <span className="badge rounded-pill bg-warning-light">
                                            Pending
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          28 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            6.00 PM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient4.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Michelle Fairfax{" "}
                                              <span>#PT0004</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$350</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          27 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            8.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="patient-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src="/component_assets/img/patients/patient5.jpg"
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="patient-profile">
                                              Gina Moore <span>#PT0005</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td>$250</td>
                                        <td>
                                          <span className="badge rounded-pill bg-danger-light">
                                            Refunded
                                          </span>
                                        </td>
                                        <td>
                                          <div className="table-action">
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-info-light"
                                            >
                                              <i className="far fa-eye"></i> View
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-success-light"
                                            >
                                              <i className="fas fa-check"></i>{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="/"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times"></i>{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
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
                      <Link to="/">
                        <img src="/component_assets/img/logo.png" alt="logo" />
                      </Link>
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
                            <Link to="search">Search for Doctors</Link>
                          </li>
                          <li>
                            <Link to="login">Login</Link>
                          </li>
                          <li>
                            <Link to="register">Register</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Doctors</h2>
                        <ul>
                          <li>
                            <Link to="appointments">Appointments</Link>
                          </li>
                          <li>
                            <Link to="chat">Chat</Link>
                          </li>
                          <li>
                            <Link to="login">Login</Link>
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
                              <Link
                                to="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="b2d6ddd1d1c7c0d7f2d7cad3dfc2ded79cd1dddf"
                              >
                                [email&#160;protected]
                              </Link>
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
                          <Link to="/">
                            <i className="fab fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
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
                        <Link
                          to="https://themeforest.net/user/dreamguys/portfolio"
                          target="_blank"
                        >
                          Dreamguys.
                        </Link>{" "}
                        All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <Link to="privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="terms-condition">Terms and Conditions</Link>
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

      <div
        className="modal fade custom-modal"
        id="payment_request_modal"
        role="dialog"
        style="display: none;"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Payment Request</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="payment_request_form" method="post">
                <input
                  type="hidden"
                  name="payment_type"
                  id="payment_type"
                  value="1"
                />
                <div className="mb-3">
                  <label className="mb-2">Request Amount</label>
                  <input
                    type="text"
                    name="request_amount"
                    id="request_amount"
                    className="form-control"
                    maxlength="6"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="mb-3">
                  <label className="mb-2">Description (Optional)</label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="description"
                  ></textarea>
                  <span className="help-block"></span>
                </div>
              </form>
            </div>
            <div className="modal-footer text-center">
              <button type="submit" id="request_btn" className="btn btn-primary">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade custom-modal"
        id="account_modal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Account Details</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="accounts_form" method="post">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Bank Name</label>
                      <input
                        type="text"
                        name="bank_name"
                        className="form-control bank_name"
                        value="Wells Fargo & Co"
                      />
                      <span className="help-block"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Branch Name</label>
                      <input
                        type="text"
                        name="branch_name"
                        className="form-control branch_name"
                        value="Lenexa"
                      />
                      <span className="help-block"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Account Number</label>
                      <input
                        type="text"
                        name="account_no"
                        className="form-control account_no"
                        value="5396 5250 1908 3838"
                      />
                      <span className="help-block"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Account Name</label>
                      <input
                        type="text"
                        name="account_name"
                        className="form-control acc_name"
                        value="Dr. Darren Elder"
                      />
                      <span className="help-block"></span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer text-center">
              <button type="submit" id="acc_btn" className="btn btn-primary">
                Save
              </button>
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

      <script src="assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
      <script src="assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>

      <script src="assets/plugins/select2/js/select2.min.js"></script>

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default Accounts;
