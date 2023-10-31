import React from "react";

const Doctor_schedule_timings = () => {
  return (
    <>
      {/*doc_tpl.jsx */}
      <div className="container-fluid">
        <div className="col-md-7 col-lg-8 col-xl-9">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Schedule Timings</h4>
                  <div className="profile-box">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="durations">Timing Slot Duration</label>
                          <select className="form-select form-control">
                            <option>-</option>
                            <option>15 mins</option>
                            <option selected="selected">30 mins</option>
                            <option>45 mins</option>
                            <option>1 Hour</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card schedule-widget mb-0">
                          <div className="schedule-header">
                            <div className="schedule-nav">
                              <ul className="nav nav-tabs nav-justified">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#slot_sunday"
                                  >
                                    Sunday
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    href="#slot_monday"
                                  >
                                    Monday
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#slot_tuesday"
                                  >
                                    Tuesday
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#slot_wednesday"
                                  >
                                    Wednesday
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#slot_thursday"
                                  >
                                    Thursday
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#slot_friday"
                                  >
                                    Friday
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#slot_saturday"
                                  >
                                    Saturday
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="tab-content schedule-cont">
                            <div id="slot_sunday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>

                            <div
                              id="slot_monday"
                              className="tab-pane fade show active"
                            >
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#edit_time_slot"
                                >
                                  <i className="fa fa-edit me-1"></i>Edit
                                </a>
                              </h4>

                              <div className="doc-times">
                                <div className="doc-slot-list">
                                  8:00 pm - 11:30 pm
                                  <a
                                    href="javascript:void(0)"
                                    className="delete_schedule"
                                  >
                                    <i className="fa fa-times"></i>
                                  </a>
                                </div>
                                <div className="doc-slot-list">
                                  11:30 pm - 1:30 pm
                                  <a
                                    href="javascript:void(0)"
                                    className="delete_schedule"
                                  >
                                    <i className="fa fa-times"></i>
                                  </a>
                                </div>
                                <div className="doc-slot-list">
                                  3:00 pm - 5:00 pm
                                  <a
                                    href="javascript:void(0)"
                                    className="delete_schedule"
                                  >
                                    <i className="fa fa-times"></i>
                                  </a>
                                </div>
                                <div className="doc-slot-list">
                                  6:00 pm - 11:00 pm
                                  <a
                                    href="javascript:void(0)"
                                    className="delete_schedule"
                                  >
                                    <i className="fa fa-times"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div id="slot_tuesday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>

                            <div id="slot_wednesday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>

                            <div id="slot_thursday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>

                            <div id="slot_friday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>

                            <div id="slot_saturday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <a
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  href="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </a>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
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
                              data-cfemail="fe9a919d9d8b8c9bbe9b869f938e929bd09d9193"
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

      <div className="modal fade custom-modal" id="add_time_slot">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Time Slots</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="hours-info">
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-more mb-3">
                  <a href="javascript:void(0);" className="add-hours">
                    <i className="fa fa-plus-circle"></i> Add More
                  </a>
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade custom-modal" id="edit_time_slot">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Time Slots</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="hours-info">
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option selected>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option selected>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option selected>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option selected>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                      <a href="#" className="btn btn-danger trash">
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option selected>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option selected>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                      <a href="#" className="btn btn-danger trash">
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="add-more mb-3">
                  <a href="javascript:void(0);" className="add-hours">
                    <i className="fa fa-plus-circle"></i> Add More
                  </a>
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script
        data-cfasync="false"
        src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="../assets/js/jquery-3.7.0.min.js"></script>

      <script src="../assets/js/bootstrap.bundle.min.js"></script>

      <script src="../assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
      <script src="../assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>

      <script src="../assets/plugins/select2/js/select2.min.js"></script>

      <script src="../assets/js/script.js"></script>
    </>
  );
};

export default Doctor_schedule_timings;
