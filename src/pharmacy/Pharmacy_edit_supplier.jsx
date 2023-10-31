import React from "react";

const Pharmacy_edit_supplier = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Edit Supplier</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Supplier</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  <form
                    method="post"
                    enctype="multipart/form-data"
                    autocomplete="off"
                    id="update_service"
                    action="https://doccure.dreamguystech.com/html/template/pharmacy/purchase"
                  >
                    <input
                      type="hidden"
                      name="csrf_token_name"
                      value="0146f123a4c7ae94253b39bca6bd5a5e"
                    />
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Name<span className="text-danger">*</span>
                            </label>
                            <input
                              type="hidden"
                              name="name"
                              id="name"
                              value="18"
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="name2"
                              id="name2"
                              value
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label className="mb-2">
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            type="hidden"
                            name="email"
                            id="email"
                            value="18"
                          />
                          <input
                            className="form-control"
                            type="text"
                            name="email2"
                            id="email2"
                            value
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Phone<span className="text-danger">*</span>
                            </label>
                            <input
                              type="hidden"
                              name="phone"
                              id="phone"
                              value="18"
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="phone2"
                              id="phone2"
                              value
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label className="mb-2">
                            Company<span className="text-danger">*</span>
                          </label>
                          <input
                            type="hidden"
                            name="company"
                            id="company"
                            value="18"
                          />
                          <input
                            className="form-control"
                            type="text"
                            name="company2"
                            id="company2"
                            value
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="mb-2">
                              Address <span className="text-danger">*</span>
                            </label>
                            <textarea
                              id="address"
                              className="form-control service-desc"
                              name="address"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="service-upload">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <span>Upload Supplier Image *</span>
                            <input
                              type="file"
                              name="images[]"
                              id="images"
                              multiple
                              accept="image/jpeg, image/png, image/gif"
                            />
                          </div>
                          <div id="uploadPreview">
                            <ul className="upload-wrap">
                              <li>
                                <div className=" upload-images">
                                  <img
                                    alt="Blog Image"
                                    src="/pharmacy_assets/img/product/product1.jpg"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                        name="form_submit"
                        value="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharmacy_edit_supplier;
