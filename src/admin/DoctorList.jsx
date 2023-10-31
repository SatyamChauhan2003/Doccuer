import React from 'react';
import "./assets/css/custom.css";
import Header from './Header';

const DoctorList = () => {
  return (
    <div>
    <Header/>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Doctors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="Admin">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:(0);">Users</a>
                  </li>
                  <li className="breadcrumb-item active">Doctor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Speciality</th>
                          <th>Member Since</th>
                          <th>Earned</th>
                          <th>Account Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-01.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. Ruby Perrin</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>25 Jan 2023 <br /><small>02.59 AM</small></td>
                          <td>$3800.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-02.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. Deborah Angel</a>
                            </h2>
                          </td>
                          <td>Cardiology</td>
                          <td>14 Aug 2023 <br /><small>02.59 AM</small></td>
                          <td>$3500.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-03.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. John Doe</a>
                            </h2>
                          </td>
                          <td>Urology</td>
                          <td>1 Jun 2023 <br /><small>04.59 AM</small></td>
                          <td>$2900.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-05.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. Deborah Angel</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>14 Apr 2023 <br /><small>02.59 AM</small></td>
                          <td>$3100.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-06.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. Ruby Perrin</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>25 Jan 2023 <br /><small>02.59 AM</small></td>
                          <td>$3100.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-07.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. Ruby Perrin</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>14 Jan 2023 <br /><small>02.59 AM</small></td>
                          <td>$3800.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-08.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Dr. Deborah Angel</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>14 Apr 2023 <br /><small>02.59 AM</small></td>
                          <td>$3100.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                defaultChecked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        {/* Add more rows with similar structure */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include your footer component here */}
      {/* <Footer /> */}
    </div>
  );
};

export default DoctorList;
