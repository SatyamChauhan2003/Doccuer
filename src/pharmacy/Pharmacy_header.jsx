import React from "react";

// <link rel="shortcut icon" type="image/x-icon" href="/pharmacy_assets/img/favicon.png">
// <link rel="stylesheet" href="assets/css/bootstrap.min.css">
// <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css">
// <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css">
// <link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css">
// <link rel="stylesheet" href="assets/css/feathericon.min.css">
// <link rel="stylesheet" href="assets/plugins/datatables/datatables.min.css">
// <link rel="stylesheet" href="assets/css/custom.css">
const Pharmacy_header = () => {
  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <a href="index" className="logo">
            <img src="/pharmacy_assets/img/logo.png" alt="Logo" />
          </a>
          <a href="index" className="logo logo-small">
            <img
              src="/pharmacy_assets/img/logo-small.png"
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </div>

        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fe fe-text-align-left"></i>
        </a>
        <div className="top-nav-search">
          <form>
            <input type="text" className="form-control" placeholder="Search here" />
            <button className="btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars"></i>
        </a>

        <ul className="nav user-menu">
          <li className="nav-item dropdown noti-dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i className="fe fe-bell"></i>{" "}
              <span className="badge rounded-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/pharmacy_assets/img/doctors/doctor-thumb-01.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                            Schedule{" "}
                            <span className="noti-title">her appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/pharmacy_assets/img/profiles/avatar-01.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Charlene Reed</span> has
                            booked her appointment to{" "}
                            <span className="noti-title">Dr. Ruby Perrin</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/pharmacy_assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Travis Trimble</span> sent
                            a amount of $210 for his{" "}
                            <span className="noti-title">appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/pharmacy_assets/img/profiles/avatar-03.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Carl Kelly</span> send a
                            message{" "}
                            <span className="noti-title"> to his doctor</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="/pharmacy_assets/img/profiles/avatar-01.jpg"
                  width="31"
                  alt="Ryan Taylor"
                />
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="/pharmacy_assets/img/profiles/avatar-01.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile">
                My Profile
              </a>
              <a className="dropdown-item" href="settings">
                Settings
              </a>
              <a className="dropdown-item" href="login">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li>
                <a href="index">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-document"></i> <span> Products</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{display:"none"}}>
                  <li>
                    <a href="products">Products</a>
                  </li>
                  <li>
                    <a href="add-product" className="active">
                      Add Product
                    </a>
                  </li>
                  <li>
                    <a href="outstock">Out-Stock</a>
                  </li>
                  <li>
                    <a href="expired">Expired</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="categories">
                  <i className="fe fe-layout"></i> <span>Categories</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-star-o"></i> <span> Purchase</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{display:"none"}}>
                  <li>
                    <a href="purchase">Purchase</a>
                  </li>
                  <li>
                    <a href="add-purchase">Add Purchase</a>
                  </li>
                  <li>
                    <a href="order">Order</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="sales">
                  <i className="fe fe-activity"></i> <span>Sales</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-user"></i> <span> Supplier</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{display:"none"}}>
                  <li>
                    <a href="supplier">Supplier</a>
                  </li>
                  <li>
                    <a href="add-supplier">Add Supplier</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="transactions-list">
                  <i className="fe fe-table"></i> <span>Transaction</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-document"></i> <span> Reports</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{display:"none"}}>
                  <li>
                    <a href="invoice-report">Invoice Reports</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li>
                <a href="profile">
                  <i className="fe fe-user-plus"></i> <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="settings">
                  <i className="fe fe-vector"></i> <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy_header;
