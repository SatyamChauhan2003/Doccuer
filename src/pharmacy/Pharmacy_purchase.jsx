import React from "react";

const Pharmacy_purchase = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Purchase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Purchase</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a
                  href="add-purchase"
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
                          <th>Purchase Date</th>
                          <th>Medicine Name</th>
                          <th>Medicine Category</th>
                          <th>Purchase Price</th>
                          <th>Quantity</th>
                          <th>Supplier</th>
                          <th>Expire Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13-5-2020</td>
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
                          <td>Aripiprazole</td>
                          <td>$220</td>
                          <td>60</td>
                          <td>Bradley</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-purchase"
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
                          <td>12-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product1.jpg"
                                  alt="product image"
                                />
                              </span>
                              Adderall
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$30</td>
                          <td>20</td>
                          <td>Douglas</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-purchase"
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
                          <td>11-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product2.jpg"
                                  alt="product image"
                                />
                              </span>
                              Actamin
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$58</td>
                          <td>33</td>
                          <td>Douglas</td>
                          <td>20-06-20</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-purchase"
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
                          <td>10-5-2020</td>
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
                          <td>Aripiprazole</td>
                          <td>$336</td>
                          <td>50</td>
                          <td>Bradley</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-purchase"
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
                          <td>9-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product1.jpg"
                                  alt="product image"
                                />
                              </span>
                              Adderall
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$10</td>
                          <td>605</td>
                          <td>Douglas</td>
                          <td>13-06-20</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-purchase"
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
                          <td>8-5-2020</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/pharmacy_assets/img/product/product2.jpg"
                                  alt="product image"
                                />
                              </span>
                              Actamin
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$15</td>
                          <td>160</td>
                          <td>Douglas</td>
                          <td>20-06-20</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="edit-purchase"
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

export default Pharmacy_purchase;
