import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/plugins/select2/css/select2.min.css";
import "./assets/css/custom.css";

const Footer_Comp = () => {
  return (
    <>
      <footer className="footer footer-one footer-ten">
        <div className="footer-ten-bg">
          <img src="./component_assets/img/bg/hexagen-group-4.png" alt="design-image" />
          <img src="./component_assets/img/bg/hexagen-group-5.png" alt="design-image" />
          <img src="./component_assets/img/bg/ecg.png" alt="ecg" />
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="footer-details">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <img src="./component_assets/img/footer-logo.svg" alt="logo" />
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">&nbsp;</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <p>
                          <i className="feather-map-pin"></i> 3556 Beech Street, USA
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
                            data-cfemail="0f6b606c6c7a7d6a4f6a776e627f636a216c6062"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-map">
                    <img
                      src="./component_assets/img/bg/footer-map.jpg"
                      className="img-fluid"
                      alt="map"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Services by city</h2>
                  <ul>
                    <li>
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <a href="#">Los Angeles</a>
                    </li>
                    <li>
                      <a href="#">Chicago</a>
                    </li>
                    <li>
                      <a href="#">Houston</a>
                    </li>
                    <li>
                      <a href="#">Phoenix</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Services by city</h2>
                  <ul>
                    <li>
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <a href="#">Los Angeles</a>
                    </li>
                    <li>
                      <a href="#">Chicago</a>
                    </li>
                    <li>
                      <a href="#">Houston</a>
                    </li>
                    <li>
                      <a href="#">Phoenix</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
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
              <div className="col-lg-2 col-md-4">
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

              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h2 className="footer-title">Subscribe to newsletter</h2>
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
                  <span className="mail-note">
                    * Will send you weekly updates for your better finance
                    management.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="copyright-text">
                <p className="mb-0">© 2023 Doccure. All Rights Reserved.</p>
              </div>

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
      </footer>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{transition: "stroke-dashoffset 10ms linear 0s",strokeDasharray: "307.919px, 307.919px", strokeDashoffset: "228.265px"}}
          ></path>
        </svg>
      </div>

      <script
        data-cfasync="false"
        src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="./component_assets/js/jquery-3.7.0.min.js"></script>

      <script src="./component_assets/js/bootstrap.bundle.min.js"></script>

      <script src="./component_assets/js/feather.min.js"></script>

      <script src="./component_assets/js/moment.min.js"></script>
      <script src="./component_assets/js/bootstrap-datetimepicker.min.js"></script>

      <script src="./component_assets/js/owl.carousel.min.js"></script>

      <script src="./component_assets/js/slick.js"></script>

      <script src="./component_assets/js/aos.js"></script>

      <script src="./component_assets/js/backToTop.js"></script>

      <script src="./component_assets/js/script.js"></script>
    </>
  );
};

export default Footer_Comp;
