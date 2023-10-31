import React from "react";

const Pharmacy_transactions_list = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Transactions</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
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
                          <th>Invoice No</th>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Total Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="invoice.html">#IN0001</a>
                          </td>
                          <td>#01</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Abilify
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
                            <a href="invoice.html">#IN0002</a>
                          </td>
                          <td>#02</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product3.jpg"
                                  alt="User Image"
                                />
                              </span>
                              ITONE eye drops 10ml
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
                            <a href="invoice.html">#IN0003</a>
                          </td>
                          <td>#03</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product4.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Safi Natural Blood Purifier
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
                            <a href="invoice.html">#IN0004</a>
                          </td>
                          <td>#04</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product5.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Moisturization & Nourishment
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
                            <a href="invoice.html">#IN0005</a>
                          </td>
                          <td>#05</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product6.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Blackhead Removal
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
                            <a href="invoice.html">#IN0006</a>
                          </td>
                          <td>#06</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Abilify
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
                            <a href="invoice.html">#IN0007</a>
                          </td>
                          <td>#07</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product6.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Blackhead Removal
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
                            <a href="invoice.html">#IN0008</a>
                          </td>
                          <td>#08</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product3.jpg"
                                  alt="User Image"
                                />
                              </span>
                              ITONE eye drops 10ml
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
                            <a href="invoice.html">#IN0009</a>
                          </td>
                          <td>#09</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Whitening & Fairness
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
                            <a href="invoice.html">#IN0010</a>
                          </td>
                          <td>#10</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product1.jpg"
                                  alt="User Image"
                                />
                              </span>
                              Adderall
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
    </>
  );
};

export default Pharmacy_transactions_list;
