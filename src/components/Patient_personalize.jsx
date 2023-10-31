import React from "react";

const Patient_personalize = () => {
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
                <div className="onboarding-content-box">
                  <div className="onboarding-title profile-title">
                    <h2>Upload Profile Picture</h2>
                    <h6>Add a profile photo</h6>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="onboarding-contents">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3 onboarding-contents">
                            <div className="upload-pic patient-photo-upload">
                              <img
                                src="/component_assets/img/icons/up-cam.png"
                                alt="img"
                                id="blah"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="upload-patient-pic">
                            <div className="upload-patient-btn">
                              <a className="pic-upload-btn">
                                <i className="fas fa-upload me-2"></i>Upload images
                              </a>
                              <input type="file" id="imgInp" />
                            </div>
                            <div>
                              <a className="pic-upload-btn">
                                <i className="fas fa-camera me-2"></i>Take a photo
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="uploads-report">
                            <a href="#" className="text-success">
                              <i className="fas fa-check-double me-2"></i>Uploaded
                              Successfully
                            </a>
                            <a href="#" className="text-danger">
                              <i className="far fa-times-circle me-2"></i>Upload
                              Failed
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="onboarding-btn Personalize-btn">
                      <a href="patient-details">Continue</a>
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

      <script src="assets/js/moment.min.js"></script>
      <script src="assets/js/bootstrap-datetimepicker.min.js"></script>

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default Patient_personalize;
