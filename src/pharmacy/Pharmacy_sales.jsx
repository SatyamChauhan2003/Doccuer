import React from "react";

const Pharmacy_sales = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-12">
                <h3 className="page-title">Sales</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Sales</li>
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
                          <th>Invoice No</th>
                          <th>Medicine Name</th>
                          <th>Total Price</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>20170001</td>
                          <td>Abilify,Actamin,Actamin</td>
                          <td>$220</td>
                          <td>12-5-2020</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                className="btn btn-sm bg-default-light"
                                href="invoice"
                              >
                                <i className="fas fa-file-alt"></i> Invoice
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirmModal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>20169999</td>
                          <td>Abilify,Actamin</td>
                          <td>$100</td>
                          <td>13-5-2020</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                className="btn btn-sm bg-default-light"
                                href="invoice"
                              >
                                <i className="fas fa-file-alt"></i> Invoice
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirmModal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>20169998</td>
                          <td>Abilify</td>
                          <td>$150</td>
                          <td>14-5-2020</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                className="btn btn-sm bg-default-light"
                                href="invoice"
                              >
                                <i className="fas fa-file-alt"></i> Invoice
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirmModal"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>20170001</td>
                          <td>Abilify,Actamin,Actamin</td>
                          <td>$220</td>
                          <td>15-5-2020</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_invoice_report"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                className="btn btn-sm bg-default-light"
                                href="invoice"
                              >
                                <i className="fas fa-file-alt"></i> Invoice
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm bg-danger-light"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirmModal"
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
                        value="20169998"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Medicine Name</label>
                      <input type="text" className="form-control" value="Abilify" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Total Amount</label>
                      <input type="text" className="form-control" value="$150.00" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Created Date</label>
                      <input
                        type="text"
                        className="form-control"
                        value="14-5-2020"
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
        id="deleteConfirmModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="deleteConfirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="acc_title">
                Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p id="acc_msg">Are you sure you want to delete?</p>
            </div>
            <div className="modal-footer">
              <a
                href="javascript:void(0)"
                className="btn btn-success si_accept_confirm"
              >
                Yes
              </a>
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharmacy_sales;
