import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/custom.css";
import Header from "./Header";

const ForgotPassword = () => {
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
                  src="/admin_assets/img/logo-white.png"
                  alt="Logo"
                />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Forgot Password?</h1>
                  <p className="account-subtitle">
                    Enter your email to get a password reset link
                  </p>
                  <form action="https://doccure.dreamguystech.com/html/template/admin/login">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-0">
                      <button className="btn btn-primary w-100" type="submit">
                        Reset Password
                      </button>
                    </div>
                  </form>
                  <div className="text-center dont-have">
                    Remember your password? <a href="Login">Login</a>
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

export default ForgotPassword;
