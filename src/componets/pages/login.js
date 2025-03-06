import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="container d-flex justify-content-center  align-items-center vh-100">
      <div className="row w-75 p-3 mb-5 bg-white rounded align-items-center ">
        {/* Left Section with Rounded Left Corner */}
        <div className="col-md-6 text-center bg-primary   text-white p-4 rounded-start">
          <img
            src="https://lh3.googleusercontent.com/ycipQZIXDsOCOoc7LOcXD5gTInVm_4M0v57Uwu1bsiq4l65vUKlsVEo-L-G08xvvSauhCzDeHSOxumjEclKjwA=s900"
            className="rounded-circle mt-4 border border-3"
            width="100"
            height="100"
            alt="Profile"
          />
          <p className="fw-bold text-uppercase">ANTI CORRUPTION COMMISSION</p>
          <hr className="w-25 mx-auto border-2" />
          <p className="fs-5">
            Together, let's kick corruption out of <strong>Sierra Leone</strong>
          </p>
        </div>

        {/* Right Section with Rounded Right Corner */}
        <div className="col-md-6 text-center bg-white text-dark p-4 rounded-end ">
          <p className="fw-bold text-primary">ASSET DECLARATION</p>
          <hr className="w-25 mx-auto border-3 border-blue-500" />

          <p className="fw-bold">LOGIN</p>
          <p>Welcome to the ACC asset declaration platform...</p>

          {/* Email Input Field with Icon */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaEnvelope className="text-secondary" />
              </span>
              <input
                type="email"
                className="form-control border-start-0"
                placeholder="Enter email / mobile"
              />
            </div>
          </div>

          {/* Password Input Field with Icon */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaLock className="text-secondary" />
              </span>
              <input
                type="password"
                className="form-control border-start-0"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Links & Register Section */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <a href="#" className="text-secondary small">Forgot Password?</a>
            <div className="d-flex align-items-center">
              <span className="fw-bold me-1">Have an account?</span>
              <a href="#" className="text-primary fw-bold">Register</a>
            </div>
          </div>

          {/* Continue Button */}
          <button className="btn btn-outline-primary w-50 mt-3">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
