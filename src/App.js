import React from "react";
import "./components/assets/css/bootstrap.min.css";
import "./components/assets/css/custom.css";
import "./components/assets/css/animate.css";
import "./components/assets/css/feather.css";
import "./components/assets/plugins/fontawesome/css/all.min.css";
import "./components/assets/plugins/fontawesome/css/fontawesome.min.css";
import "./components/assets/css/owl.carousel.min.css";
import "./components/assets/css/bootstrap-datetimepicker.min.css";
import { Routes, Route } from "react-router-dom";
import Specialities from "./admin/Specialities";
import Admin from "./admin/Admin";
import DoctorList from "./admin/DoctorList";
import PatientList from "./admin/PatientList";
import Reviews from "./admin/Reviews";
import TransactionsList from "./admin/TransactionsList";
import Settings from "./admin/Settings";
import InvoiceReport from "./admin/InvoiceReport";
import Profile from "./admin/Profile";
import ForgotPassword from "./admin/ForgotPassword";
import LockScreen from "./admin/LockScreen";
import Error404 from "./components/Error404";
import Error500 from "./components/Error500";
import Appointments from "./admin/Appointments";
import ContactUs from "./components/ContactUs";
import Doctor_profile from "./components/Doctor_profile";
import Doctor_dashboard from "./doctor/Doctor_dashboard";
import Schedule_timings from "./components/Schedule_timings";
import Patient_profile from "./components/Patient_profile";
import ChatDoctor from "./components/ChatDoctor";
import Invoice_comp from "./components/Invoice_comp";
import Doctor_register from "./components/Doctor_register";
import Doctor_profile_settings from "./components/Doctor_profile_settings";
import Pharmacy_index from "./components/Pharmacy_index";
import Pharmacy_details from "./components/Pharmacy_details";
import Product_description from "./components/Product_description";
import Product_all from "./components/Product_all";
import ChangePassword from "./components/ChangePassword";
import Profile_settings from "./components/Profile_settings";
import Chat from "./components/Chat";
import Favourites from "./components/Favourites";
import Patient_dashboard from "./components/Patient_dashboard";
import BookingSuccess from "./components/BookingSuccess";
import Checkout from "./components/Checkout";
import Booking2 from "./components/Booking2";
import Booking from "./components/Booking";
import Search2 from "./components/Search2";
import Search from "./components/Search";
import Map_list from "./components/Map_list";
import Map_grid from "./components/Map_grid";
import DoctorBlog from "./components/DoctorBlog";
import Home from "./components/Home"
import Cart from "./components/Cart"
import AboutUs from "./components/AboutUs"
import Voice_call from "./components/Voice_call"
import Video_call from "./components/Video_call"
import Terms_condition from "./components/Terms_condition"
import Privacy_policy from "./components/Privacy_policy"
import BlogList from "./components/BlogList"
import BlogGrid from "./components/BlogGrid"
import BlogDetails from "./components/BlogDetails"
import Pharmacy_home from "./pharmacy/Pharmacy_home"
import Signup from "./components/Signup"
import Pharmacy_register from "./pharmacy/Pharmacy_register"
import Pharmacy_search from "./pharmacy/Pharmacy_search"
import Login_email from "./components/Login_email"
import Product_checkout from "./components/Product_checkout"
import Doctor_login from "./doctor/Doctor_login"

const App = () => {
  return (
    <>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route exact path="/doctor/login" element={<Doctor_login />} />
        <Route exact path="/product-checkout" element={<Product_checkout />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/voice-call" element={<Voice_call />} />
        <Route exact path="/video-call" element={<Video_call />} />
        <Route exact path="/terms-condition" element={<Terms_condition />} />
        <Route exact path="/privacy-policy" element={<Privacy_policy />} />
        <Route exact path="/blog-list" element={<BlogList />} />
        <Route exact path="/blog-grid" element={<BlogGrid />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login-email" element={<Login_email />} />
        <Route exact path="/doctor/pharmacy-index" element={<Pharmacy_home />} />
        <Route exact path="/doctor/pharmacy-search" element={<Pharmacy_search />} />
        <Route exact path="/pharmacy-register" element={<Pharmacy_register />} />
        <Route exact path="doctorList" element={<DoctorList />} />
        <Route exact path="patientList" element={<PatientList />} />
        <Route exact path="specialities" element={<Specialities />} />
        <Route exact path="reviews" element={<Reviews />} />
        <Route exact path="transactions-list" element={<TransactionsList />} />
        <Route exact path="settings" element={<Settings />} />
        <Route exact path="invoice-report" element={<InvoiceReport />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="forgot-password" element={<ForgotPassword />} />
        <Route exact path="LockScreen" element={<LockScreen />} />
        <Route exact path="BlankPage" element={<Error404 />} />
        <Route exact path="error500" element={<Error500 />} />
        <Route exact path="appointment" element={<Appointments />} />
        <Route exact path="contact-us" element={<ContactUs />} />
        <Route exact path="doctor-profile" element={<Doctor_profile />} />
        <Route exact path="/doctor-dashboard" element={<Doctor_dashboard />} />
        <Route exact path="/schedule-timings" element={<Schedule_timings />} />
        <Route exact path="/my-patients" element={<PatientList />} />
        <Route exact path="/patient-profile" element={<Patient_profile />} />
        <Route exact path="/chat-doctor" element={<ChatDoctor />} />
        <Route exact path="/invoices-comp" element={<Invoice_comp />} />
        <Route exact path="/doctor-register" element={<Doctor_register />} />
        <Route
          exact
          path="/doctor-profile-settings"
          element={<Doctor_profile_settings />}
        />
        <Route exact path="/pharmacy-index" element={<Pharmacy_index />} />
        <Route exact path="/change-password" element={<ChangePassword />} />
        <Route exact path="/profile-settings" element={<Profile_settings />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route
          exact
          path="/patient-dashboard"
          element={<Patient_dashboard />}
        />
        <Route exact path="/booking-success" element={<BookingSuccess />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/booking-2" element={<Booking2 />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/search-2" element={<Search2 />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/map-list" element={<Map_list />} />
        <Route exact path="/map-grid" element={<Map_grid />} />
        <Route exact path="/doctor-blog" element={<DoctorBlog />} />
        <Route exact path="/doctor/pharmacy-details" element={<Pharmacy_details />} />
        <Route exact path="/doctor/product-all" element={<Product_all />} />
        <Route exact path="/doctor/product-description" element={<Product_description />} />
      </Routes>
    </>
  );
};

export default App;
