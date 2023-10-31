import React from "react";

const Products = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Products</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a
                  href="add-product"
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
                          <th>#</th>
                          <th>Product Name</th>
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
                          <td>8</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product10.jpg"
                                  alt="product image"
                                />
                              </span>
                              Lysofranil Dorzostin
                            </h2>
                          </td>
                          <td>Hair care</td>
                          <td>$10</td>
                          <td>22</td>
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
                                href="edit-product"
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
                          <td>7</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product2.jpg"
                                  alt="product image"
                                />
                              </span>
                              Adderall
                            </h2>
                          </td>
                          <td>Phytopathology‎</td>
                          <td>$10</td>
                          <td>22</td>
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
                                href="edit-product"
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
                          <td>6</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product11.jpg"
                                  alt="product image"
                                />
                              </span>
                              Ergorinex Caffeigestin
                            </h2>
                          </td>
                          <td>Hair care</td>
                          <td>$15</td>
                          <td>22</td>
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
                                href="edit-product"
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
                          <td>5</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product12.jpg"
                                  alt="product image"
                                />
                              </span>
                              Acetrace Amionel
                            </h2>
                          </td>
                          <td>Body care</td>
                          <td>$10</td>
                          <td>22</td>
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
                                href="edit-product"
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
                          <td>4</td>
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
                                href="edit-product"
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
                          <td>3</td>
                          <td>
                            <h2 className="table-avatar">
                              <span className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img"
                                  src="/component_assets/img/product/product13.jpg"
                                  alt="product image"
                                />
                              </span>
                              Rapalac Neuronium
                            </h2>
                          </td>
                          <td>Skin care</td>
                          <td>$16</td>
                          <td>213</td>
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
                                href="edit-product"
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
                          <td>2</td>
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
                                href="edit-product"
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
                                  src="/component_assets/img/product/product14.jpg"
                                  alt="product image"
                                />
                              </span>
                              Cordacriptine Mardipine
                            </h2>
                          </td>
                          <td>Skin care</td>
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
                                href="edit-product"
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

export default Products;
