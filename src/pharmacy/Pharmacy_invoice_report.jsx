import React from "react";

const Pharmacy_invoice_report = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Invoice Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
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
                          <th>Medicine Name</th>
                          <th>Total Amount</th>
                          <th>Created Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="sorting_1">
                            <a href="invoice">#IN0001</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0002</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0003</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
                            </h2>
                          </td>
                          <td>$250.00</td>
                          <td>25 Sep 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-danger inv-badge">
                              Pending
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0004</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
                            </h2>
                          </td>
                          <td>$150.00</td>
                          <td>9 Oct 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-warning inv-badge">
                              Unpaid
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0005</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0006</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0007</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0008</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin,Actamin
                            </h2>
                          </td>
                          <td>$150.00</td>
                          <td>30 Oct 2019</td>
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0009</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify
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
                          <td className="sorting_1">
                            <a href="invoice">#IN0010</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="Product Image"
                                />
                              </span>
                              Abilify,Actamin,Actamin
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
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Medicine Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Medicine Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Total Amount</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">
                        Status <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-control"
                        name="category"
                        required
                      >
                        <option value selected="selected">
                          Paid
                        </option>
                        <option value="2">Unpaid</option>
                        <option value="3">Pending</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="mb-2">Created Date</label>
                      <input type="text" className="form-control" />
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
    </>
  );
};

export default Pharmacy_invoice_report;
