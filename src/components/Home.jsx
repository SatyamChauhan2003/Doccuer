import React from "react";
import { Link } from "react-router-dom";
import Footer_Comp from "./Footer_Comp";
import Header_Comp from "./Header_Comp";
// import "./assets/css/custom.css"

const Home = () => {
  return (
    <>
      <div>
      <Header_Comp/>
        <section className="banner-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="banner-content aos" data-aos="fade-up">
                  <h6>
                    <img
                      src="./component_assets/img/icons/heart-2.svg"
                      className="me-2"
                      alt="heart-icon"
                    />
                    Every Beat, Every Moment
                  </h6>
                  <h1>
                    Health Care Is Essential For <br />
                    <span>Healthy Heart</span>
                  </h1>
                  <p>
                    We can guide you through issues like Cardiac arrest, Heart
                    Failure, Peripher`al Artery Disease, Arrhythmia, Atrial
                    Fibrillation, Cholesterol and High BP.
                  </p>
                  <Link to="/booking" className="btn plan-btn mx-3">
                    Start a Consult
                  </Link>
                  <Link to="/booking" className="btn">
                    Click Our Plan
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-img aos" data-aos="fade-up">
                  <img
                    src="./component_assets/img/bg/home-10-banner-img.png"
                    className="img-fluid"
                    alt="doctor-image"
                  />
                  <img
                    src="./component_assets/img/bg/heart-bg.png"
                    className="img-fluid"
                    alt="heart-image"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="search-box-one search-ten aos"
                  data-aos="fade-up"
                >
                  <div className="search-title">
                    <h5>Book An Apppointment</h5>
                    <img
                      src="./component_assets/img/icons/health-care-1.svg"
                      alt="heart-icon"
                    />
                  </div>
                  <form action="https://doccure.dreamguystech.com/html/template/search-2">
                    <div className="row row-gap justify-content-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="search-input-ten">
                          <span>
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          <div className="forms-block mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12">
                        <div className="search-input-ten">
                          <span>
                            <i className="fa-solid fa-calendar-minus"></i>
                          </span>
                          <div className="forms-block mb-0">
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="search-input-ten">
                          <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </span>
                          <div className="forms-block mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Doctor"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-12">
                        <div className="form-search-btn search-btn-ten w-100">
                          <button className="btn" type="submit">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="specialities-section-one">
          <div className="floating-bg">
            <img
              src="./component_assets/img/bg/health-care.png"
              alt="heart-image"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    Why <span>Doccure?</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="specialities-block aos " data-aos="fade-up">
              <ul>
                <li>
                  <div className="specialities-item">
                    <div className="specialities-img">
                      <div className="hexogen">
                        <img
                          src="./component_assets/img/icons/health-care-love.svg"
                          alt="heart-icon"
                        />
                      </div>
                    </div>
                    <p>Personalized Health care</p>
                  </div>
                </li>
                <li>
                  <div className="specialities-item">
                    <div className="specialities-img">
                      <div className="hexogen">
                        <img
                          src="./component_assets/img/icons/user-doctor.svg"
                          alt="male-doctor-icon"
                        />
                      </div>
                    </div>
                    <p>World-Leading Experts</p>
                  </div>
                </li>
                <li>
                  <div className="specialities-item">
                    <div className="specialities-img">
                      <div className="hexogen">
                        <img
                          src="./component_assets/img/icons/healthcare.svg"
                          alt="stethoscope-icon"
                        />
                      </div>
                    </div>
                    <p>Regularly Check Up</p>
                  </div>
                </li>
                <li>
                  <div className="specialities-item">
                    <div className="specialities-img">
                      <div className="hexogen">
                        <img
                          src="./component_assets/img/icons/drugs-svg.svg"
                          alt="medicine-icon"
                        />
                      </div>
                    </div>
                    <p>Treatment For Complex Conditions</p>
                  </div>
                </li>
                <li>
                  <div className="specialities-item">
                    <div className="specialities-img">
                      <div className="hexogen">
                        <img
                          src="./component_assets/img/icons/syringe-svg.svg"
                          alt="syringe-icon"
                        />
                      </div>
                    </div>
                    <p>Minimally Invasive Procedures</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    Our <span>Services</span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="row row-gap aos justify-content-center"
              data-aos="fade-up"
            >
              <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="search">
                      <img
                        src="./component_assets/img/features/feature-07.jpg"
                        className="img-fluid"
                        alt="surgery-image"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-title">
                        <h3>
                          <Link to="search">Heart Valve Disease</Link>
                        </h3>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-user">
                          <div className="listing-profile-img">
                            <Link to="doctor-profile">
                              <img
                                src="./component_assets/img/doctors/doctor-19.jpg"
                                className="img-fluid"
                                alt="Anoop Shetty"
                              />
                            </Link>
                          </div>
                          <div className="listing-user-details">
                            <span>Specialist</span>
                            <h6>
                              <Link to="doctor-profile">Dr Anoop Shetty</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link to="booking-2" className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="search">
                      <img
                        src="./component_assets/img/features/feature-08.jpg"
                        className="img-fluid"
                        alt="surgery-image"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-title">
                        <h3>
                          <Link to="search">Coronary artery disease</Link>
                        </h3>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-user">
                          <div className="listing-profile-img">
                            <Link to="doctor-profile">
                              <img
                                src="./component_assets/img/doctors/doctor-20.jpg"
                                className="img-fluid"
                                alt="Simon Pearse"
                              />
                            </Link>
                          </div>
                          <div className="listing-user-details">
                            <span>Specialist</span>
                            <h6>
                              <Link to="doctor-profile">Dr Simon Pearse</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link to="booking-2" className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="search">
                      <img
                        src="./component_assets/img/features/feature-09.jpg"
                        className="img-fluid"
                        alt="surgery-image"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-title">
                        <h3>
                          <Link to="search">High blood pressure</Link>
                        </h3>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-user">
                          <div className="listing-profile-img">
                            <Link to="doctor-profile">
                              <img
                                src="./component_assets/img/doctors/doctor-21.jpg"
                                className="img-fluid"
                                alt="Rajan Sharma"
                              />
                            </Link>
                          </div>
                          <div className="listing-user-details">
                            <span>Specialist</span>
                            <h6>
                              <Link to="doctor-profile">Dr Rajan Sharma</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link to="booking-2" className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="search">
                      <img
                        src="./component_assets/img/features/feature-10.jpg"
                        className="img-fluid"
                        alt="heart-attack-image"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-title">
                        <h3>
                          <Link to="search">Heart attack</Link>
                        </h3>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-user">
                          <div className="listing-profile-img">
                            <Link to="doctor-profile">
                              <img
                                src="./component_assets/img/doctors/doctor-22.jpg"
                                className="img-fluid"
                                alt="John Paul"
                              />
                            </Link>
                          </div>
                          <div className="listing-user-details">
                            <span>Specialist</span>
                            <h6>
                              <Link to="doctor-profile">Dr John Paul</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link to="booking-2" className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="search">
                      <img
                        src="./component_assets/img/features/feature-11.jpg"
                        className="img-fluid"
                        alt="heart-attack-image"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-title">
                        <h3>
                          <Link to="search">Heart palpitations</Link>
                        </h3>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-user">
                          <div className="listing-profile-img">
                            <Link to="doctor-profile">
                              <img
                                src="./component_assets/img/doctors/doctor-23.jpg"
                                className="img-fluid"
                                alt="Marry Peter"
                              />
                            </Link>
                          </div>
                          <div className="listing-user-details">
                            <span>Specialist</span>
                            <h6>
                              <Link to="doctor-profile">Dr Marry Peter</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link to="booking-2" className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="search">
                      <img
                        src="./component_assets/img/features/feature-12.jpg"
                        className="img-fluid"
                        alt="headache-image"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className="fav-icon">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-title">
                        <h3>
                          <Link to="search">Heart palpitations</Link>
                        </h3>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-user">
                          <div className="listing-profile-img">
                            <Link to="doctor-profile">
                              <img
                                src="./component_assets/img/doctors/doctor-24.jpg"
                                className="img-fluid"
                                alt="Juliana"
                              />
                            </Link>
                          </div>
                          <div className="listing-user-details">
                            <span>Specialist</span>
                            <h6>
                              <Link to="doctor-profile">Dr Juliana</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link to="booking-2" className="btn consult-btn">
                            Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="need-to-know-section">
          <div className="floating-bg">
            <img
              src="./component_assets/img/bg/health-care.png"
              alt="heart-image"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-12 aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    Need To Know <span>Cardiac Conditions</span>
                  </h2>
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link tag-list active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#content_1"
                        type="button"
                        role="tab"
                        aria-controls="content_1"
                        aria-selected="true"
                      >
                        Heart valve disease
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link tag-list"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#content_2"
                        type="button"
                        role="tab"
                        aria-controls="content_2"
                        aria-selected="false"
                      >
                        Heart failure
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link tag-list"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#content_3"
                        type="button"
                        role="tab"
                        aria-controls="content_3"
                        aria-selected="false"
                      >
                        Pacemakers and defibrillators
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="content_1"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="need-to-know-content">
                        <h3>Heart valve disease</h3>
                        <p>
                          If one of the valves in your heart becomes diseased it
                          can affect the flow of blood. This can happen in one
                          of two ways: valve stenosis (where the valve does not
                          fully open and obstructs or restricts flow) or valve
                          incompetence (where the valve does not close properly
                          and blood is allowed to leak backwards)....
                        </p>
                        <Link
                          to="booking"
                          className=" need-to-know-content-btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="content_2"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="need-to-know-content">
                        <h3>Heart failure</h3>
                        <p>
                          If one of the valves in your heart becomes diseased it
                          can affect the flow of blood. This can happen in one
                          of two ways: valve stenosis (where the valve does not
                          fully open and obstructs or restricts flow) or valve
                          incompetence (where the valve does not close properly
                          and blood is allowed to leak backwards)....
                        </p>
                        <Link
                          to="booking"
                          className=" need-to-know-content-btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="content_3"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="need-to-know-content">
                        <h3>Pacemakers and defibrillators</h3>
                        <p>
                          If one of the valves in your heart becomes diseased it
                          can affect the flow of blood. This can happen in one
                          of two ways: valve stenosis (where the valve does not
                          fully open and obstructs or restricts flow) or valve
                          incompetence (where the valve does not close properly
                          and blood is allowed to leak backwards)....
                        </p>
                        <Link
                          to="booking"
                          className=" need-to-know-content-btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 aos" data-aos="fade-up">
                <div className="gallery-box-block">
                  <div className="gallery-box-left">
                    <div className="box-detail mb-2 ">
                      <img
                        src="./component_assets/img/features/feature-13.jpg"
                        className="img-fluid"
                        alt="doctor-image"
                      />
                    </div>
                    <div className="box-detail">
                      <img
                        src="./component_assets/img/features/feature-14.jpg"
                        className="img-fluid"
                        alt="heart-image"
                      />
                    </div>
                  </div>
                  <div className="gallery-box-right">
                    <div className="box-detail">
                      <img
                        src="./component_assets/img/features/feature-15.jpg"
                        className="img-fluid"
                        alt="heart-image"
                      />
                    </div>
                    <div className="box-detail">
                      <img
                        src="./component_assets/img/features/feature-16.jpg"
                        className="img-fluid"
                        alt="doctor-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-doctor-section">
          <div className="section-floating-bg">
            <img
              src="./component_assets/img/bg/hexagen-group-1.png"
              alt="design-image"
            />
            <img
              src="./component_assets/img/bg/hexagon-group-2.png"
              alt="design-image"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    Our Specialist <span>Doctors</span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="row row-gap aos justify-content-center"
              data-aos="fade-up"
            >
              <div className="col-md-6 col-sm-12 col-xl-3 col-lg-4">
                <div className="module-border-wrap">
                  <div className="listing-card">
                    <div className="listing-img">
                      <Link to="doctor-profile">
                        <img
                          src="./component_assets/img/doctors/doctor-13.jpg"
                          className="img-fluid"
                          alt="Jonathan Behar"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="featured-rating">
                          <i className="fa fa-star "></i> <span>4.5</span>
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-details">
                        <div className="listing-category">
                          <Link className="listing-category-tag tag-green">
                            Cardiology
                          </Link>
                          <Link className="listing-category-tag tag-purple">
                            physiology
                          </Link>
                        </div>
                        <div className="listing-profile-details">
                          <div className="listing-floating-img">
                            <img
                              src="./component_assets/img/bg/ecg-wave.png"
                              alt="ecg-wave"
                            />
                          </div>
                          <div className="listing-user">
                            <div className="listing-user-details">
                              <h6>
                                <Link to="doctor-profile">
                                  Dr Jonathan Behar{" "}
                                </Link>
                              </h6>
                              <span>Cardiologist</span>
                            </div>
                          </div>
                          <div className="listing-btn">
                            <Link to="booking-2" className="btn consult-btn">
                              Consult
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xl-3 col-lg-4">
                <div className="module-border-wrap">
                  <div className="listing-card">
                    <div className="listing-img">
                      <Link to="doctor-profile">
                        <img
                          src="./component_assets/img/doctors/doctor-thumb-02.jpg"
                          className="img-fluid"
                          alt="Piers Clifford"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="featured-rating">
                          <i className="fa fa-star "></i> <span>4.5</span>
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-details">
                        <div className="listing-category">
                          <Link className="listing-category-tag tag-red">
                            Hypertension
                          </Link>
                          <Link className="listing-category-tag tag-green">
                            Cardiology
                          </Link>
                        </div>
                        <div className="listing-profile-details">
                          <div className="listing-floating-img">
                            <img
                              src="./component_assets/img/bg/ecg-wave.png"
                              alt="ecg-wave"
                            />
                          </div>
                          <div className="listing-user">
                            <div className="listing-user-details">
                              <h6>
                                <Link to="doctor-profile">
                                  Dr Piers Clifford
                                </Link>
                              </h6>
                              <span>Consultant Cardiologist</span>
                            </div>
                          </div>
                          <div className="listing-btn">
                            <Link to="booking-2" className="btn consult-btn">
                              Consult
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xl-3 col-lg-4">
                <div className="module-border-wrap">
                  <div className="listing-card">
                    <div className="listing-img">
                      <Link to="doctor-profile">
                        <img
                          src="./component_assets/img/doctors/doctor-thumb-05.jpg"
                          className="img-fluid"
                          alt="Rajan Sharma"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="featured-rating">
                          <i className="fa fa-star "></i> <span>4.5</span>
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-details">
                        <div className="listing-category">
                          <Link className="listing-category-tag tag-green">
                            Cardiology
                          </Link>
                          <Link className="listing-category-tag tag-purple">
                            physiology
                          </Link>
                        </div>
                        <div className="listing-profile-details">
                          <div className="listing-floating-img">
                            <img
                              src="./component_assets/img/bg/ecg-wave.png"
                              alt="ecg-wave"
                            />
                          </div>
                          <div className="listing-user">
                            <div className="listing-user-details">
                              <h6>
                                <Link to="doctor-profile">Dr Rajan Sharma</Link>
                              </h6>
                              <span>Cardiologist</span>
                            </div>
                          </div>
                          <div className="listing-btn">
                            <Link to="booking-2" className="btn consult-btn">
                              Consult
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xl-3 col-lg-4">
                <div className="module-border-wrap">
                  <div className="listing-card">
                    <div className="listing-img">
                      <Link to="doctor-profile">
                        <img
                          src="./component_assets/img/doctors/doctor-thumb-07.jpg"
                          className="img-fluid"
                          alt="Julian Collinson"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="featured-rating">
                          <i className="fa fa-star "></i> <span>4.5</span>
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-details">
                        <div className="listing-category">
                          <Link className="listing-category-tag tag-red">
                            Hypertension
                          </Link>
                          <Link className="listing-category-tag tag-green">
                            Cardiology
                          </Link>
                        </div>
                        <div className="listing-profile-details">
                          <div className="listing-floating-img">
                            <img
                              src="./component_assets/img/bg/ecg-wave.png"
                              alt="ecg-wave"
                            />
                          </div>
                          <div className="listing-user">
                            <div className="listing-user-details">
                              <h6>
                                <Link to="doctor-profile">
                                  Dr Julian Collinson
                                </Link>
                              </h6>
                              <span>Consultant Cardiologist</span>
                            </div>
                          </div>
                          <div className="listing-btn">
                            <Link to="booking-2" className="btn consult-btn">
                              Consult
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="need-to-know-section steps-to-follow">
          <div className="floating-bg">
            <img
              src="./component_assets/img/bg/health-care.png"
              alt="heart-image"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 aos" data-aos="fade-up">
                <div className="gallery-box-block">
                  <div className="gallery-box-right">
                    <div className="box-detail">
                      <div className="steps-list-box">
                        <div className="steps-list-img">
                          <span>1</span>
                          <img
                            src="./component_assets/img/icons/hreat-pulse.svg"
                            className="img-fluid"
                            alt="heart-pulse"
                          />
                        </div>
                        <h6>Choose Your Doctor</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing..
                        </p>
                      </div>
                    </div>
                    <div className="box-detail">
                      <div className="steps-list-box">
                        <div className="steps-list-img">
                          <span>3</span>
                          <img
                            src="./component_assets/img/icons/hreat-pulse.svg"
                            className="img-fluid"
                            alt="heart-pulse"
                          />
                        </div>
                        <h6>Consult with doctor</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-box-left">
                    <div className="box-detail mb-4 ">
                      <div className="steps-list-box">
                        <div className="steps-list-img">
                          <span>2</span>
                          <img
                            src="./component_assets/img/icons/hreat-pulse.svg"
                            className="img-fluid"
                            alt="heart-pulse"
                          />
                        </div>
                        <h6>Set Appointment</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing..
                        </p>
                      </div>
                    </div>
                    <div className="box-detail">
                      <div className="steps-list-box">
                        <div className="steps-list-img">
                          <span>4</span>
                          <img
                            src="./component_assets/img/icons/hreat-pulse.svg"
                            className="img-fluid"
                            alt="heart-pulse"
                          />
                        </div>
                        <h6>Get recommendation</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    Easy Steps For <span>New Patients</span>
                  </h2>
                  <div className="need-to-know-content">
                    <p>
                      If one of the valves in your heart becomes diseased it can
                      affect the flow of blood. This can happen in one of two
                      ways: valve stenosis (where the valve does not fully open
                      and obstructs or restricts flow) or valve incompetence
                      (where the valve does not close properly and blood is
                      allowed to leak backwards)....
                    </p>
                    <div className="content-btn-block d-flex">
                      <Link
                        to="booking"
                        className=" need-to-know-content-btn book-btn me-2"
                      >
                        Book Appointment
                      </Link>
                      <Link to="pricing" className=" need-to-know-content-btn">
                        Click Our Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="testimonial-section-ten need-to-know-section">
          <div className="floating-bg">
            <img
              src="./component_assets/img/bg/health-care.png"
              alt="heart-image"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-5 aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    What Our <span>Patients Say</span>
                  </h2>
                  <div className="need-to-know-content">
                    <p>
                      If one of the valves in your heart becomes diseased it can
                      affect the flow of blood. This can happen in one of two
                      ways: valve stenosis (where the valve does not fully open
                      and obstructs or restricts flow) or valve incompetence
                      (where the valve does not close properly and blood is
                      allowed to leak backwards)....
                    </p>
                    <div className="patient-rating-block">
                      <div className="patient-rating">
                        <div className="circle-rating">
                          <i className="fa-solid fa-circle"></i>
                          <i className="fa-solid fa-circle"></i>
                          <i className="fa-solid fa-circle"></i>
                          <i className="fa-solid fa-circle"></i>
                          <i className="fa-solid fa-circle-half-stroke"></i>
                          <span>(4.8/5)</span>
                        </div>
                        <h5>Overall Customer Ratings</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 aos" data-aos="fade-up">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="testimonial-card">
                      <div className="testimonial-user-details">
                        <div className="testimonial-user-img">
                          <img
                            src="./component_assets/img/clients/client-07.jpg"
                            className="img-fluid"
                            alt="Martin Philips"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>Martin Philips</h5>
                          <div className="circle-rating">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                          </div>
                        </div>
                      </div>
                      <div className="testmonial-user-coments">
                        <h6>“ Awesome Impact ”</h6>
                        <p>
                          After suffering from a heart condition for a number of
                          years I was very happy to meet Doccure, from the first
                          consultation where he believed there was a solution...
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-card">
                      <div className="testimonial-user-details">
                        <div className="testimonial-user-img">
                          <img
                            src="./component_assets/img/clients/client-08.jpg"
                            className="img-fluid"
                            alt="James Anderson"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>James Anderson</h5>
                          <div className="circle-rating">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                          </div>
                        </div>
                      </div>
                      <div className="testmonial-user-coments">
                        <h6>“ I am very grateful ”</h6>
                        <p>
                          Doctors explains everything clearly and helps you to
                          understand even the most complex medical terms
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-card">
                      <div className="testimonial-user-details">
                        <div className="testimonial-user-img">
                          <img
                            src="./component_assets/img/clients/client-09.jpg"
                            className="img-fluid"
                            alt="Christina Louis"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>Christina Louis</h5>
                          <div className="circle-rating">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                          </div>
                        </div>
                      </div>
                      <div className="testmonial-user-coments">
                        <h6>“ Excellent Clinician ”</h6>
                        <p>
                          Excellent clinician. Endlessly patient and
                          reassuring.Also a very efficient back up team. He was
                          prepared to spend as long as I needed to understand
                          what he was saying.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="book-appointment-section aos" data-aos="fade-up">
          <div className="container">
            <div className="book-appointment-ten text-center">
              <div className="book-section-bg">
                <img
                  src="./component_assets/img/bg/hexagen-group-3.png"
                  alt="design-image"
                />
                <img
                  src="./component_assets/img/bg/hand.png"
                  alt="hand-image"
                />
                <img
                  src="./component_assets/img/bg/heart-plus.png"
                  alt="heart-plus"
                />
              </div>
              <h2>Book An Appointment Today</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="appointment-btn-group">
                <Link to="booking" className="appointment-blue-btn">
                  Start a Consult
                </Link>
                <Link to="pricing">Click Our Plan</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section pricing-section-ten">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center aos" data-aos="fade-up">
                <div className="section-header-one section-header-slider">
                  <h2 className="section-title">
                    Our <span>Pricing</span>
                  </h2>
                  <div className="pricing-options">
                    <p>Choose the package that best suit you</p>
                    <div className="options-group">
                      <span>Monthly</span>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                      <span>
                        Yearly{" "}
                        <span className="discount-plan">30% discount</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos"
                data-aos="fade-up"
              >
                <div className="card pricing-card pricing-card-active">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-title">
                          <h4>Free</h4>
                        </div>
                        <div className="pricing-tag">
                          <div>
                            <img
                              src="./component_assets/img/bg/heart-plus.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>$0 </h2>
                        <span>per month</span>
                      </div>
                      <div className="pricing-btn">
                        <Link to="pricing" className="btn">
                          Choose Plan
                        </Link>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>100 conversations p/m</li>
                          <li>10 websites</li>
                          <li>2 GB data storage</li>
                        </ul>
                      </div>
                      <div className="pricing-list pricing-list-two">
                        <ul>
                          <li>Chat widget</li>
                          <li>Real time support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos"
                data-aos="fade-up"
              >
                <div className="card pricing-card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-title">
                          <h4>Essentials</h4>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>$50 </h2>
                        <span>per month</span>
                      </div>
                      <div className="pricing-btn">
                        <Link to="pricing" className="btn">
                          Request A Demo
                        </Link>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>500 conversations p/m</li>
                          <li>20 websites</li>
                          <li>20 GB data storage</li>
                        </ul>
                      </div>
                      <div className="pricing-list pricing-list-two">
                        <ul>
                          <li>Chat widget</li>
                          <li>Real time support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos"
                data-aos="fade-up"
              >
                <div className="card pricing-card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-title">
                          <h4>Team</h4>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>$90 </h2>
                        <span>per month</span>
                      </div>
                      <div className="pricing-btn">
                        <Link to="pricing" className="btn">
                          Request A Demo
                        </Link>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>500 conversations p/m</li>
                          <li>20 websites</li>
                          <li>20 GB data storage</li>
                        </ul>
                      </div>
                      <div className="pricing-list pricing-list-two">
                        <ul>
                          <li>Chat widget</li>
                          <li>Real time support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos"
                data-aos="fade-up"
              >
                <div className="card pricing-card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-title">
                          <h4>Enterprises</h4>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>$150 </h2>
                        <span>per month</span>
                      </div>
                      <div className="pricing-btn">
                        <Link to="pricing" className="btn">
                          Request A Demo
                        </Link>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>500 conversations p/m</li>
                          <li>20 websites</li>
                          <li>20 GB data storage</li>
                        </ul>
                      </div>
                      <div className="pricing-list pricing-list-two">
                        <ul>
                          <li>Chat widget</li>
                          <li>Real time support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section faq-section-ten">
          <div className="floating-bg">
            <img
              src="./component_assets/img/bg/health-care.png"
              alt="heart-image"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                <div className="faq-img">
                  <img
                    src="./component_assets/img/faq-img-2.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="section-header-one aos" data-aos="fade-up">
                  <h2 className="section-title">
                    Frequently Asked <span>Questions?</span>
                  </h2>
                </div>
                <div className="faq-info aos" data-aos="fade-up">
                  <div className="accordion" id="faq-details">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <Link
                          to="#;"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Experience in When to repair the mitral valve.
                        </Link>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <Link
                          to="#;"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Have you need an expert medical team in house?
                        </Link>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <Link
                          to="#;"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <Link
                          to="#;"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Experience in When to repair the mitral valve.
                        </Link>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <Link
                          to="#;"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      <Footer_Comp/>
    </>
  );
};

export default Home;
