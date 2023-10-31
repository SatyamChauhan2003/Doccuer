import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/custom.css";
import Header from "./Header";
<link rel="shortcut icon" type="image/x-icon" href="/admin_assets/img/favicon.png" />;

const Register = () => {
  return (
    <div>
    <Header/>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img
                  className="img-fluid"
                  src="./assets/img/logo-white.png"
                  alt="Logo"
                />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  <form action="https://doccure.dreamguystech.com/html/template/admin/login">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="mb-0">
                      <button className="btn btn-primary w-100" type="submit">
                        Register
                      </button>
                    </div>
                  </form>

                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  <div className="social-login">
                    <span>Register with</span>
                    <a href="#" className="facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="google">
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>

                  <div className="text-center dont-have">
                    Already have an account? <a href="Login">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="assets/js/jquery-3.7.0.min.js"></script>

      <script src="assets/js/bootstrap.bundle.min.js"></script>

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default Register;
