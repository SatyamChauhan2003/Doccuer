import React from "react";

const Patient_other_details = () => {
  return (
    <div>
      <div className="onboard-wrapper">
        <div className="left-panel">
          <div className="onboarding-logo text-center">
            <a href="index-2">
              <img
                src="/component_assets/img/onboard-img/onb-logo.png"
                className="img-fluid"
                alt="doccure-logo"
              />
            </a>
          </div>
          <div className="onboard-img">
            <img
              src="/component_assets/img/onboard-img/onb-slide-img.png"
              className="img-fluid"
              alt="onboard-slider"
            />
          </div>
          <div className="onboarding-slider">
            <div
              id="onboard-slider"
              className="owl-carousel owl-theme onboard-slider slider"
            >
              <div className="onboard-item text-center">
                <div className="onboard-content">
                  <h3>Welcome to Doccure</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>

              <div className="onboard-item text-center">
                <div className="onboard-content">
                  <h3>Welcome to Doccure</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>

              <div className="onboard-item text-center">
                <div className="onboard-content">
                  <h3>Welcome to Doccure</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="right-panel-title text-center">
                  <a href="index-2">
                    {" "}
                    <img
                      src="/component_assets/img/onboard-img/onb-logo.png"
                      alt="doccure-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="on-board-wizard">
                  <ul>
                    <li>
                      <a href="patient-email">
                        <div className="onboarding-progress active">
                          <span>1</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Registration</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="patient-personalize">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Profile Picture</h6>
                          <p>Upload Profile picture</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="patient-details">
                        <div className="onboarding-progress active">
                          <span>3</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Personal Details</h6>
                          <p>Enter your Personal Details</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="patient-family-details">
                        <div className="onboarding-progress active">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Select Members</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="patient-dependant-details">
                        <div className="onboarding-progress active">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Dependant details</h6>
                          <p>Dependants Profile</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="patient-other-details">
                        <div className="onboarding-progress active">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Other Detail</h6>
                          <p>More information</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box content-wrap">
                  <div className="onborad-set">
                    <div className="onboarding-title">
                      <h2>
                        Other Details<span>*</span>
                      </h2>
                      <h6>Please fill the details below</h6>
                    </div>
                    <div className="onboarding-content passcode-wrap mail-box">
                      <div className="row">
                        <form method="post">
                          <div className="col-lg-12">
                            <div className="mb-3 ">
                              <div className="input-placeholder form-focus passcode-wrap">
                                <label className="focus-label">Enter Address</label>
                                <input
                                  type="text"
                                  className="form-control floating"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <select className="select">
                                <option disabled selected>
                                  Select City
                                </option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                                <option>Houston</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <select className="select">
                                <option disabled selected>
                                  Select State
                                </option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Hawaii</option>
                                <option>Georgia</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <select className="select">
                                <option disabled selected>
                                  Select Country
                                </option>
                                <option>Argentina</option>
                                <option>Brazil</option>
                                <option>Chile</option>
                                <option>Egypt</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3 ">
                              <div className="form-floating input-placeholder passcode-wrap">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a comment here"
                                  id="floatingTextarea2"
                                  style="height: 135px"
                                ></textarea>
                                <label for="floatingTextarea2">
                                  Other Information
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#profile-completed"
                    >
                      Continue
                    </a>
                  </div>

                  <div
                    className="modal fade fade-custom"
                    id="profile-completed"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog id-upload modal-dialog-centered">
                      <div className="modal-content id-pop-content">
                        <div className="modal-header id-pop-header justify-content-center">
                          <img
                            src="/component_assets/img/icons/success-tick.svg"
                            alt="success-tick"
                          />
                        </div>
                        <div className="modal-body id-pop-body text-center">
                          <h3>Thank you</h3>
                          <span> Mr.Dennis</span>
                          <p className="pb-0">
                            your Account has been completed successfully
                          </p>
                        </div>
                        <div className="modal-footer id-pop-footer text-center">
                          <div className="onboarding-btn pop-btn ">
                            <a href="patient-dashboard">Go to Dashboard</a>
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

      <script src="assets/js/jquery-3.7.0.min.js"></script>

      <script src="assets/js/bootstrap.bundle.min.js"></script>

      <script src="assets/js/owl.carousel.min.js"></script>

      <script src="assets/plugins/select2/js/select2.min.js"></script>

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default Patient_other_details;
