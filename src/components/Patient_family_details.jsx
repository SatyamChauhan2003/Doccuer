import React from "react";

const Patient_family_details = () => {
  return (
    <>
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
                        Select Members<span>*</span>
                      </h2>
                      <h6>Who all you want to cover in health insurance</h6>
                    </div>
                    <div className="onboarding-content">
                      <div className="row">
                        <div className="col-lg-12">
                          <form method="post">
                            <div className="checklist-col pregnant-col">
                              <div className="remember-me-col d-flex justify-content-between">
                                <span className="mt-1">Self</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className
                                    name="self"
                                    id="self"
                                    value="1"
                                    checked
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Spouse</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className
                                    name="spouse"
                                    id="spouse"
                                    value="1"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Child</span>
                                <div className="increment-decrement">
                                  <div className="input-groups">
                                    <input
                                      type="button"
                                      value="-"
                                      id="subs"
                                      className="button-minus dec button"
                                    />
                                    <input
                                      type="text"
                                      name="child"
                                      id="child"
                                      value="0"
                                      className="quantity-field"
                                    />
                                    <input
                                      type="button"
                                      value="+"
                                      id="adds"
                                      className="button-plus inc button a1 a2 a3 a4 a0"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Mother</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className
                                    name="mother"
                                    id="mother"
                                    value="1"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="remember-me-col d-flex align-items-center justify-content-between">
                                <span className="mt-1">Father</span>
                                <label className="custom_check">
                                  <input
                                    type="checkbox"
                                    className
                                    name="father"
                                    id="father"
                                    value="1"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <a href="patient-dependant-details">Continue</a>
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
    </>
  );
};

export default Patient_family_details;
