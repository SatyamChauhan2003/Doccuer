import React from "react";

const Order = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-12">
                <h3 className="page-title">Order</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Order</li>
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
                          <th>Supplier ID</th>
                          <th>Supplier Name</th>
                          <th>Order by</th>
                          <th>Add order</th>
                          <th>Order list</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>256</td>
                          <td>Douglas Meyer</td>
                          <td>Trinity General Hospital</td>
                          <td>10-5-2020</td>
                          <td>Dolofin Antigripal(Dolo)  3</td>
                          <td>
                            <div className="actions">
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
                          <td>20</td>
                          <td>Tyler Robinson</td>
                          <td>Grand Valley Clinic</td>
                          <td>10-5-2020</td>
                          <td>
                            Dolofin Antigripal(Dolo)  50
                            <br />
                            Dolofin Antigripal(Dolo)  4
                          </td>
                          <td>
                            <div className="actions">
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
                          <td>15</td>
                          <td>Mary Dixon</td>
                          <td>Grand Plains Clinic</td>
                          <td>10-5-2020</td>
                          <td>Dolo 650(CIpla)  0</td>
                          <td>
                            <div className="actions">
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
                          <td>156</td>
                          <td>Kurt Wooten</td>
                          <td>Mercy Vale Clinic</td>
                          <td>10-5-2020</td>
                          <td>Tektonik(None)  2</td>
                          <td>
                            <div className="actions">
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
                          <td>23</td>
                          <td>Vickie Pritchett</td>
                          <td>Kindred Soul Clinic</td>
                          <td>10-5-2020</td>
                          <td>Dolofin Antigripal(Dolo)  4</td>
                          <td>
                            <div className="actions">
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
                          <td>35</td>
                          <td>Joanne Fry</td>
                          <td>Hope Haven Hospital</td>
                          <td>10-5-2020</td>
                          <td>Dolo 650(CIpla)  0</td>
                          <td>
                            <div className="actions">
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
                          <td>205</td>
                          <td>Christopher Johnson</td>
                          <td>Hill Crest Clinic</td>
                          <td>10-5-2020</td>
                          <td>
                            Dolofin Antigripal(Dolo)  50
                            <br />
                            Dolofin Antigripal(Dolo)  4
                          </td>
                          <td>
                            <div className="actions">
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

export default Order;
