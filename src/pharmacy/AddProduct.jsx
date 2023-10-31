import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Add Product</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Add Product</li>
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
                    action="https://doccure.dreamguystech.com/html/template/pharmacy/medicine"
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
                              Product Name<span className="text-danger">*</span>
                            </label>
                            <input
                              type="hidden"
                              name="brand_name"
                              id="brand_name"
                              value="18"
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="brand_name2"
                              id="brand_name2"
                              value="18"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Category <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-select form-control"
                              name="category"
                              required
                            >
                              <option value>Phytopathology</option>
                              <option value="2" selected="selected">
                                Family Care
                              </option>
                              <option value="3">Cancer</option>
                              <option value="4">Fitness & Wellness</option>
                              <option value="5">Hair care</option>
                              <option value="6">Skin care</option>
                              <option value="7">Neoplasms</option>
                              <option value="8">Women's Care</option>
                              <option value="9">Sleep disorders</option>
                              <option value="10">Baby care</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Price<span className="text-danger">*</span>
                            </label>
                            <input
                              type="hidden"
                              name="Price"
                              id="Price"
                              value="18"
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="Price2"
                              id="Price2"
                              value="$"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Quantity<span className="text-danger">*</span>
                            </label>
                            <input
                              type="hidden"
                              name="quantity"
                              id="quantity"
                              value="18"
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="quantity2"
                              id="quantity2"
                              value
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Discount<span className="text-danger">*</span>
                            </label>
                            <input
                              type="hidden"
                              name="discount"
                              id="discount"
                              value="18"
                            />
                            <input
                              className="form-control"
                              type="text"
                              name="discount2"
                              id="discount2"
                              value
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="mb-2">
                              Descriptions <span className="text-danger">*</span>
                            </label>
                            <textarea
                              id="about"
                              className="form-control service-desc"
                              name="about"
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
                            <span>Upload Product Images *</span>
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
    </div>
  );
};

export default AddProduct;
