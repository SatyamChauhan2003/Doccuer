import React from "react";

const Outstock = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Outstock</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Medicine</a>
                  </li>
                  <li className="breadcrumb-item active">Outstock</li>
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
                          <th>#</th>
                          <th>Brand Name</th>
                          <th>Genetic Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Discount</th>
                          <th>Expire</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product1.jpg"
                                  alt="product image"
                                />
                              </span>
                              Actamin
                            </h2>
                          </td>
                          <td>Amphetamine</td>
                          <td>Phytopathology‎</td>
                          <td>$22</td>
                          <td>
                            <span className="btn btn-sm bg-danger-light">
                              THERE ONLY 5
                            </span>
                          </td>
                          <td>0%</td>
                          <td>
                            <span className="btn btn-sm bg-danger-light">
                              THE PRODUCT IS EXPIRED
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="javascript:void(0);"
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
                          <td>1</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product.jpg"
                                  alt="product image"
                                />
                              </span>
                              Abilify
                            </h2>
                          </td>
                          <td>Aripiprazole</td>
                          <td>Phytopathology‎</td>
                          <td>$22</td>
                          <td>
                            <span className="btn btn-sm bg-danger-light">
                              THERE ONLY 2
                            </span>
                          </td>
                          <td>0%</td>
                          <td>
                            <span className="btn btn-sm bg-danger-light">
                              THE PRODUCT IS EXPIRED
                            </span>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                href="javascript:void(0);"
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

export default Outstock;
