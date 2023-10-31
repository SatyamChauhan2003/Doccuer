import React from "react";

const Pharmacy_supplier = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Supplier</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Supplier</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a
                  href="add-supplier.html"
                  className="btn btn-primary float-end mt-2"
                >
                  Add New
                </a>
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
                          <th>ID</th>
                          <th>Product</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Company</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>25</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product.jpg"
                                  alt="product image"
                                />
                              </span>
                              Abilify
                            </h2>
                          </td>
                          <td>Discarsa</td>
                          <td>+51 1542565</td>
                          <td>
                            <a
                              href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="d591bca6b6b4a7a6b495b2b8b4bcb9fbb6bab8"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>Paseo Los Robles</td>
                          <td>Discarsa Nicaragua</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-supplier.html"
                              >
                                <i className="fe fe-pencil"></i> Edit
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
                          <td>33</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product1.jpg"
                                  alt="product image"
                                />
                              </span>
                              Actamin
                            </h2>
                          </td>
                          <td>Proveedor</td>
                          <td>+51 23687541</td>
                          <td>
                            <a
                              href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="0373716c756666676c7143646e626a6f2d606c6e"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>Av circunvalación # 234 </td>
                          <td>mi farmacia</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-supplier.html"
                              >
                                <i className="fe fe-pencil"></i> Edit
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
                          <td>42</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product2.jpg"
                                  alt="product image"
                                />
                              </span>
                              Adderall
                            </h2>
                          </td>
                          <td>Discarsa</td>
                          <td>+51 96588552</td>
                          <td>
                            <a
                              href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="581c312b3b392a2b39183f35393134763b3735"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>Paseo Los Robles</td>
                          <td>Discarsa Nicaragua</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-supplier.html"
                              >
                                <i className="fe fe-pencil"></i> Edit
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

export default Pharmacy_supplier;
