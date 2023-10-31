import React from "react";

const patient_email = () => {
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
                        <div className="onboarding-progress">
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
                        <div className="onboarding-progress">
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
                        <div className="onboarding-progress">
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
                        <div className="onboarding-progress">
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
                        <div className="onboarding-progress">
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
                        Whats your Primary email?<span>*</span>
                      </h2>
                      <h6>
                        We will only use it to advise you for any important
                        changes.
                      </h6>
                    </div>
                    <div className="onboarding-content">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <div className="input-placeholder form-focus passcode-wrap mail-box">
                              <label className="focus-label">
                                Legal name<span>*</span>
                              </label>
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
                            <div className="input-placeholder form-focus passcode-wrap mail-box">
                              <label className="focus-label">
                                Email Address<span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control floating"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <a href="patient-email-otp">Continue</a>
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

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default patient_email;
