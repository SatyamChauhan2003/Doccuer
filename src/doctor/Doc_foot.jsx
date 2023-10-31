import React from "react";

const Doc_foot = () => {
  return (
    <>
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
                              data-cfemail="e88c878b8b9d9a8da88d90898598848dc68b8785"
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

      <script
        data-cfasync="false"
        src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="../assets/js/jquery-3.7.0.min.js"></script>

      <script src="../assets/js/bootstrap.bundle.min.js"></script>

      <script src="../assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
      <script src="../assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>

      <script src="../assets/js/circle-progress.min.js"></script>

      <script src="../assets/js/script.js"></script>
    </>
  );
};

export default Doc_foot;
