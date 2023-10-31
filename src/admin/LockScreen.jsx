import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/custom.css";
import Header from "./Header";

const LockScreen = () => {
  return (
    <div>
    <Header/>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/admin_assets/img/favicon.png"
      />

      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src="/admin_assets/img/logo.png" alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <div className="lock-user">
                    <img
                      className="rounded-circle"
                      src="/admin_assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
                    />
                    <h4>John Doe</h4>
                  </div>

                  <form action="https://doccure.dreamguystech.com/html/template/admin/index">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-0">
                      <button className="btn btn-primary w-100" type="submit">
                        Enter
                      </button>
                    </div>
                  </form>

                  <div className="text-center dont-have">
                    Sign in as a different user? <a href="login">Login</a>
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

export default LockScreen;
