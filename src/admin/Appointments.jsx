import React from 'react';
import "./assets/css/custom.css";
import Header from './Header';
import {Link} from "react-router-dom"

const Appointments = () => {
  return (
    <div>
    <Header/>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Appointments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Speciality</th>
                          <th>Patient Name</th>
                          <th>Appointment Time</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/doctors/doctor-thumb-01.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="Profile">Dr. Ruby Perrin</Link>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="Profile" className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient1.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="Profile">Charlene Reed</Link>
                            </h2>
                          </td>
                          <td>
                            9 Nov 2023{' '}
                            <span className="text-primary d-block">
                              11.00 AM - 11.15 AM
                            </span>
                          </td>
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
                          <td>$200.00</td>
                        </tr>

                        
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Darren Elder</Link>
</h2>
</td>
<td>Dental</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient2.jpg" alt="User Image"/></Link>
<Link to="profile">Travis Trimble </Link>
</h2>
</td>
<td>5 Nov 2023 <span class="text-primary d-block">11.00 AM - 11.35 AM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_2" class="check" checked/>
<label for="status_2" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$300.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Deborah Angel</Link>
</h2>
</td>
<td>Cardiology</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient3.jpg" alt="User Image"/></Link>
<Link to="profile">Carl Kelly</Link>
</h2>
</td>
<td>11 Nov 2023 <span class="text-primary d-block">12.00 PM - 12.15 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_3" class="check" checked/>
<label for="status_3" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$150.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-04.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Sofia Brient</Link>
</h2>
</td>
<td>Urology</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient4.jpg" alt="User Image"/></Link>
<Link to="profile"> Michelle Fairfax</Link>
</h2>
</td>
<td>7 Nov 2023 <span class="text-primary d-block">1.00 PM - 1.20 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_4" class="check"/>
<label for="status_4" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$150.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Marvin Campbell</Link>
</h2>
</td>
<td>Orthopaedics</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient5.jpg" alt="User Image"/></Link>
<Link to="profile">Gina Moore</Link>
</h2>
</td>
<td>15 Nov 2023 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_5" class="check" checked/>
<label for="status_5" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$200.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-06.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Katharine Berthold</Link>
</h2>
</td>
<td>Orthopaedics</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient6.jpg" alt="User Image"/></Link>
<Link to="profile">Elsie Gilley</Link>
</h2>
</td>
<td>16 Nov 2023 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_6" class="check" checked/>
<label for="status_6" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$250.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-07.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Linda Tobin</Link>
</h2>
</td>
<td>Neurology</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient7.jpg" alt="User Image"/></Link>
<Link to="profile">Joan Gardner</Link>
</h2>
</td>
<td>18 Nov 2023 <span class="text-primary d-block">1.10 PM - 1.25 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_7" class="check" checked/>
<label for="status_7" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$260.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-08.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Paul Richard</Link>
</h2>
</td>
<td>Dermatology</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient8.jpg" alt="User Image"/></Link>
<Link to="profile"> Daniel Griffing</Link>
</h2>
</td>
<td>18 Nov 2023 <span class="text-primary d-block">11.10 AM - 11.25 AM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_8" class="check" checked/>
<label for="status_8" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$260.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-09.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. John Gibbs</Link>
</h2>
</td>
<td>Dental</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient9.jpg" alt="User Image"/></Link>
<Link to="profile">Walter Roberson</Link>
</h2>
</td>
<td>21 Nov 2023 <span class="text-primary d-block">12.10 PM - 12.25 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_9" class="check" checked/>
<label for="status_9" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$300.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/doctors/doctor-thumb-10.jpg" alt="User Image"/></Link>
<Link to="profile">Dr. Olga Barlow</Link>
</h2>
</td>
<td>Dental</td>
<td>
<h2 class="table-avatar">
<Link to="profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/admin_assets/img/patients/patient10.jpg" alt="User Image"/></Link>
<Link to="profile">Robert Rhodes</Link>
</h2>
</td>
<td>23 Nov 2023 <span class="text-primary d-block">12.10 PM - 12.25 PM</span></td>
<td>
<div class="status-toggle">
<input type="checkbox" id="status_11" class="check" checked/>
<label for="status_11" class="checktoggle">checkbox</label>
</div>
</td>
<td>
$300.00
</td>
</tr>
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

export default Appointments;
