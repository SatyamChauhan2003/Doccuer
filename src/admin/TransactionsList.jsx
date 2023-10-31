import React from "react";
import Header from "./Header";

const TransactionsList = () => {
  return (
    <div>
    <Header/>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Transactions</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="Admin">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Transactions</li>
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
                          <th>Invoice Number</th>
                          <th>Patient ID</th>
                          <th>Patient Name</th>
                          <th>Total Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0001</a>
                          </td>
                          <td>#PT001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient1.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Charlene Reed </a>
                            </h2>
                          </td>
                          <td>$100.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0002</a>
                          </td>
                          <td>#PT002</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient2.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Travis Trimble </a>
                            </h2>
                          </td>
                          <td>$200.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0003</a>
                          </td>
                          <td>#PT003</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient3.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Carl Kelly</a>
                            </h2>
                          </td>
                          <td>$250.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0004</a>
                          </td>
                          <td>#PT004</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient4.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile"> Michelle Fairfax</a>
                            </h2>
                          </td>
                          <td>$150.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0005</a>
                          </td>
                          <td>#PT005</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient5.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Gina Moore</a>
                            </h2>
                          </td>
                          <td>$350.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0006</a>
                          </td>
                          <td>#PT006</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient6.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Elsie Gilley</a>
                            </h2>
                          </td>
                          <td>$300.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0007</a>
                          </td>
                          <td>#PT007</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient7.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile"> Joan Gardner</a>
                            </h2>
                          </td>
                          <td>$250.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0008</a>
                          </td>
                          <td>#PT008</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient8.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile"> Daniel Griffing</a>
                            </h2>
                          </td>
                          <td>$150.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0009</a>
                          </td>
                          <td>#PT009</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient9.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Walter Roberson</a>
                            </h2>
                          </td>
                          <td>$100.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="Invoice">#IN0010</a>
                          </td>
                          <td>#PT010</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="Profile"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/admin_assets/img/patients/patient10.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="Profile">Robert Rhodes </a>
                            </h2>
                          </td>
                          <td>$120.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
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

      <div
        className="modal fade"
        id="delete_modal"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-content p-2">
                <h4 className="modal-title">Delete</h4>
                <p className="mb-4">Are you sure want to delete?</p>
                <button type="button" className="btn btn-primary">
                  Save{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
