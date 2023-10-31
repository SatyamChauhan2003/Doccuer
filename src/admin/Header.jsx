import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feathericon.min.css";
import "./assets/plugins/morris/morris.css";
import "./assets/css/custom.css";

import {Link} from "react-router-dom"
<link rel="shortcut icon" type="image/x-icon" to="/admin_assets/img/favicon.png" />;
const Header = () => {
  return (
    
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <Link to="Admin" className="logo">
              <img src="./component_assets/img/logo.png" alt="Logo" />
            </Link>
            <Link to="Admin" className="logo logo-small">
              <img
                src="/admin_assets/img/logo-small.png"
                alt="Logo"
                width="30"
                height="30"
              />
            </Link>
          </div>
          <Link to="javascript:void(0);" id="toggle_btn">
            <i className="fe fe-text-align-left"></i>
          </Link>
          <div className="top-nav-search">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <Link className="mobile_btn" id="mobile_btn">
            <i className="fa fa-bars"></i>
          </Link>
          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <Link
                to="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="fe fe-bell"></i>{" "}
                <span className="badge rounded-pill">3</span>
              </Link>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/admin_assets/img/doctors/doctor-thumb-01.jpg"
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/admin_assets/img/patients/patient1.jpg"
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/admin_assets/img/patients/patient2.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Travis Trimble</span>{" "}
                              sent a amount of $210 for his{" "}
                              <span className="noti-title">appointment</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">8 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/admin_assets/img/patients/patient3.jpg"
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
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="#">View all Notifications</Link>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow">
              <Link
                to="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="user-img">
                  <img
                    className="rounded-circle"
                    src="/admin_assets/img/profiles/avatar-01.jpg"
                    width="31"
                    alt="Ryan Taylor"
                  />
                </span>
              </Link>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src="/admin_assets/img/profiles/avatar-01.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <Link className="dropdown-item" to="Profile">
                  My Profile
                </Link>
                <Link className="dropdown-item" to="Settings">
                  Settings
                </Link>
                <Link className="dropdown-item" to="Login">
                  Logout
                </Link>
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
                <li className="active">
                  <Link to="Admin">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="/appointment">
                    <i className="fe fe-layout"></i> <span>Appointments</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li>
                      <Link to="Appointments">Appointment List</Link>
                    </li>
                    <li>
                      <Link to="FormVertical">Appointment Add</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/specialities">
                    <i className="fe fe-users"></i> <span>Specialities</span>
                  </Link>
                </li>
                <li>
                  <Link to="/doctorList">
                    <i className="fe fe-user-plus"></i> <span>Doctors</span>
                  </Link>
                </li>
                <li>
                  <Link to="/patientList">
                    <i className="fe fe-user"></i> <span>Patients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews">
                    <i className="fe fe-star-o"></i> <span>Reviews</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transactions-list">
                    <i className="fe fe-activity"></i> <span>Transactions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <i className="fe fe-vector"></i> <span>Settings</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="/invoice-report">
                    <i className="fe fe-document"></i> <span> Reports</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li>
                      <Link to="/invoice-report">Invoice Reports</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li>
                  <Link to="/profile">
                    <i className="fe fe-user-plus"></i> <span>Profile</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fe fe-document"></i> <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li>
                      <Link to="/login"> Login </Link>
                    </li>
                    <li>
                      <Link to="/register"> Register </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password"> Forgot Password </Link>
                    </li>
                    <li>
                      <Link to="/LockScreen"> Lock Screen </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="/error500">
                    <i className="fe fe-warning"></i> <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li>
                      <Link to="Error404">404 Error </Link>
                    </li>
                    <li>
                      <Link to="Error500">500 Error </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/BlankPage">
                    <i className="fe fe-file"></i> <span>Blank Page</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li>
                  <Link to="Component">
                    <i className="fe fe-vector"></i> <span>Components</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fe fe-layout"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li>
                      <Link to="Form-Basic-input">Basic Inputs </Link>
                    </li>
                    <li>
                      <Link to="Form-Input-groups">Input Groups </Link>
                    </li>
                    <li>
                      <Link to="Form-horizontal">Horizontal Form </Link>
                    </li>
                    <li>
                      <Link to="Form-Vertical"> Vertical Form </Link>
                    </li>
                    <li>
                      <Link to="form-mask"> Form Mask </Link>
                    </li>
                    <li>
                      <Link to="form-validation"> Form Validation </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fe fe-table"></i> <span> Tables </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li>
                      <Link to="tables-basic">Basic Tables </Link>
                    </li>
                    <li>
                      <Link to="data-tables">Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i className="fe fe-code"></i> <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{display: "none"}}>
                    <li className="submenu">
                      <Link to="javascript:void(0);">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow"></span>
                      </Link>
                      <ul style={{display: "none"}}>
                        <li>
                          <Link to="javascript:void(0);">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link to="javascript:void(0);">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </Link>
                          <ul style={{display: "none"}}>
                            <li>
                              <Link to="javascript:void(0);">Level 3</Link>
                            </li>
                            <li>
                              <Link to="javascript:void(0);">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">
                            {" "}
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="javascript:void(0);">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Header;
