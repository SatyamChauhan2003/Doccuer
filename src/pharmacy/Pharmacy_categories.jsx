import React from "react";

const Pharmacy_categories = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Categories</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Categories</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a
                  href="#Add_Specialities_details"
                  data-bs-toggle="modal"
                  className="btn btn-primary float-end mt-2"
                >
                  Add
                </a>
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
                          <th>#</th>
                          <th>Name</th>
                          <th>Created date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>
                            <h2 className="table-avatar">Phytopathology‎</h2>
                          </td>
                          <td>01-May-2020-12:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td>
                            <h2 className="table-avatar">Family care</h2>
                          </td>
                          <td>03-May-2020-08:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td>
                            <h2 className="table-avatar">Cancer</h2>
                          </td>
                          <td>05-May-2020-06:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>04</td>
                          <td>
                            <h2 className="table-avatar">Hair care</h2>
                          </td>
                          <td>06-May-2020-01:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05</td>
                          <td>
                            <h2 className="table-avatar">Skin care</h2>
                          </td>
                          <td>05-May-2020-02:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>06</td>
                          <td>
                            <h2 className="table-avatar">Rare diseases‎</h2>
                          </td>
                          <td>06-May-2020-06:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>07</td>
                          <td>
                            <h2 className="table-avatar">Baby care</h2>
                          </td>
                          <td>07-May-2020-12:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>08</td>
                          <td>
                            <h2 className="table-avatar">Inflammations</h2>
                          </td>
                          <td>07-May-2020-05:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>09</td>
                          <td>
                            <h2 className="table-avatar">Sleep disorders‎</h2>
                          </td>
                          <td>07-May-2020-08:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <h2 className="table-avatar">Infectious diseases‎</h2>
                          </td>
                          <td>08-May-2020-02:00</td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil"></i> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
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
        id="Add_Specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Category</h5>
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
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="mb-2">Category</label>
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
        id="edit_specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Category</h5>
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
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="mb-2">Category</label>
                      <input
                        type="text"
                        className="form-control"
                        value="Cardiology"
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
    </>
  );
};

export default Pharmacy_categories;
