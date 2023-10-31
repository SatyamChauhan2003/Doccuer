import React from "react";
import "./assets/css/custom.css";
import Header from "./Header";

const InvoiceReport = () => {
  return (
    <div>
    <Header/>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Invoice Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="Admin">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Invoice Report</li>
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
                          <th>Created Date</th>
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
                          <td>9 Sep 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>29 Oct 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>25 Sep 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>9 Oct 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>19 Nov 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>12 Oct 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>25 Oct 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>30 Oct 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>5 Nov 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
                          <td>7 Nov 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                                className="btn btn-sm bg-success-light me-2"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
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
        id="edit_invoice_report"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Invoice Report</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Invoice Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value="#INV-0001"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Patient ID</label>
                      <input type="text" className="form-control" value="	#PT002" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Patient Name</label>
                      <input type="text" className="form-control" value="R Amer" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Patient Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Total Amount</label>
                      <input type="text" className="form-control" value="$200.00" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Created Date</label>
                      <input
                        type="text"
                        className="form-control"
                        value="29th Oct 2023"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save
                </button>
              </form>
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

export default InvoiceReport;
