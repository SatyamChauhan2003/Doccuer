import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feathericon.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/custom.css";
import Header from "./Header"
<link rel="shortcut icon" type="image/x-icon" href="/admin_assets/img/favicon.png" />;

const FormVertical = () => {
  return (
    <div>
    <Header/>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <a href="Admin" className="logo">
              <img src="/admin_assets/img/logo.png" alt="Logo" />
            </a>
            <a href="Admin" className="logo logo-small">
              <img
                src="/admin_assets/img/logo-small.png"
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
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
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
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
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
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
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
                    src="/admin_assets/img/profiles/avatar-01.jpg"
                    width="31"
                    alt="Ryan Taylor"
                  />
                </span>
              </a>
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
                <a className="dropdown-item" href="Profile">
                  My Profile
                </a>
                <a className="dropdown-item" href="Settings">
                  Settings
                </a>
                <a className="dropdown-item" href="Login">
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
                  <a href="Admin">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="Appointments">
                    <i className="fe fe-layout"></i> <span>Appointments</span>
                  </a>
                </li>
                <li>
                  <a href="Specialities">
                    <i className="fe fe-users"></i> <span>Specialities</span>
                  </a>
                </li>
                <li>
                  <a href="DoctorList">
                    <i className="fe fe-user-plus"></i> <span>Doctors</span>
                  </a>
                </li>
                <li>
                  <a href="PatientsList">
                    <i className="fe fe-user"></i> <span>Patients</span>
                  </a>
                </li>
                <li>
                  <a href="Reviews">
                    <i className="fe fe-star-o"></i> <span>Reviews</span>
                  </a>
                </li>
                <li>
                  <a href="TransactionsList">
                    <i className="fe fe-activity"></i> <span>Transactions</span>
                  </a>
                </li>
                <li>
                  <a href="Settings">
                    <i className="fe fe-vector"></i> <span>Settings</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-document"></i> <span> Reports</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{display: "none"}}>
                    <li>
                      <a href="InvoiceReport">Invoice Reports</a>
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
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-document"></i> <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{display: "none"}}>
                    <li>
                      <a href="Login"> Login </a>
                    </li>
                    <li>
                      <a href="Register"> Register </a>
                    </li>
                    <li>
                      <a href="ForgotPassword"> Forgot Password </a>
                    </li>
                    <li>
                      <a href="LockScreen"> Lock Screen </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-warning"></i> <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{display: "none"}}>
                    <li>
                      <a href="Error404">404 Error </a>
                    </li>
                    <li>
                      <a href="Error500">500 Error </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="BlankPage">
                    <i className="fe fe-file"></i> <span>Blank Page</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li>
                  <a href="Component">
                    <i className="fe fe-vector"></i> <span>Components</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-layout"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{display: "none"}}>
                    <li>
                      <a href="Form-Basic-input">Basic Inputs </a>
                    </li>
                    <li>
                      <a href="Form-Input-groups">Input Groups </a>
                    </li>
                    <li>
                      <a href="Form-horizontal">Horizontal Form </a>
                    </li>
                    <li>
                      <a className="active" href="FormVertical">
                        {" "}
                        Vertical Form{" "}
                      </a>
                    </li>
                    <li>
                      <a href="Form-Mask"> Form Mask </a>
                    </li>
                    <li>
                      <a href="Form-validation"> Form Validation </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-table"></i> <span> Tables </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{display: "none"}}>
                    <li>
                      <a href="Tables-basic">Basic Tables </a>
                    </li>
                    <li>
                      <a href="Data-tables">Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="fe fe-code"></i> <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{display: "none"}}>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow"></span>
                      </a>
                      <ul style={{display: "none"}}>
                        <li>
                          <a href="javascript:void(0);">
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="javascript:void(0);">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </a>
                          <ul style={{display: "none"}}>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Vertical Form</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="Admin">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Vertical Form</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Basic Form</h4>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="mb-3">
                        <label className="mb-2">First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Email Address</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Username</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Repeat Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Address Form</h4>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="mb-3">
                        <label className="mb-2">Address Line 1</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Address Line 2</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">City</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">State</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Country</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Postal Code</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Two Column Vertical Form</h4>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <h4 className="card-title">Personal Information</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">First Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Blood Group</label>
                            <select className="form-select">
                              <option>Select</option>
                              <option value="1">A+</option>
                              <option value="2">O+</option>
                              <option value="3">B+</option>
                              <option value="4">AB+</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="d-block">Gender:</label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender_male"
                                value="option1"
                              />
                              <label className="form-check-label" for="gender_male">
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender_female"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                for="gender_female"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Username</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Email</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Password</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Repeat Password</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <h4 className="card-title">Postal Address</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Address Line 1</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Address Line 2</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">State</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Country</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Postal Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Two Column Vertical Form</h4>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <h4 className="card-title">Personal details</h4>
                          <div className="mb-3">
                            <label className="mb-2">Name:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Password:</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">State:</label>
                            <select className="form-select">
                              <option>Select State</option>
                              <option value="1">California</option>
                              <option value="2">Texas</option>
                              <option value="3">Florida</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="mb-2">Your Message:</label>
                            <textarea
                              rows="5"
                              cols="5"
                              className="form-control"
                              placeholder="Enter message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="card-title">Personal details</h4>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">First Name:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">Last Name:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">Email:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">Phone:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="mb-3">
                                <label className="mb-2">Address line:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">Country:</label>
                                <select className="form-select">
                                  <option>Select Country</option>
                                  <option value="1">USA</option>
                                  <option value="2">France</option>
                                  <option value="3">India</option>
                                  <option value="4">Spain</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">State/Province:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">ZIP code:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="mb-2">City:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="assets/js/jquery-3.7.0.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
      <script src="assets/js/select2.min.js"></script>
      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default FormVertical;
