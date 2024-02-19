import React, { useState } from "react";
// import "./App.css"; // Import or create your CSS file for styling
import Styles from "./RegistrationForm.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div
        className="container-fluid vh-100 overflow-auto "
        style={{
          backgroundImage: 'url("assets/images/register.jpg")',
          backgroundSize: "cover",
          minHeight: "100vh",
          // display: "flex",
          alignItems: "center",
        }}
      >
        {/* <div className={Styles.background}>
          <div className={Styles.shape}></div>
          <div className={Styles.shape}></div>
        </div> */}
        <div className="row vh-100  ">
          <div className="col-lg-6 bg-gray p-5 text-center">
            {/* <h4 className="text-center fw-bolder fs-2">Register</h4>
            <p className="mb-3 fs-7">
              Register Now and Fell the New Digital World
            </p> */}

            {/* <Link href="./signUp">
              <button className="btn fw-bold mb-5 btn-outline-success px-4 rounded-pill">
                Login
              </button>
            </Link> */}
            <div className="img-cover p-4">
              <Image
                height={500}
                width={500}
                src="/assets/images/register.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6 p  vh-100">
            <div className="row d-flex vh-100">
              <form onSubmit={handleSubmit} className={Styles.form}>
                <h3 className={Styles.h3}>Registration Form</h3>
                <div className={Styles.div}>
                  <label htmlFor="firstName" className={Styles.label}>
                    First Name
                  </label>
                  <input
                    className={Styles.input}
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className={Styles.input}
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name "
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={Styles.input}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    className={Styles.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password "
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className={Styles.input}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder=" Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label}>
                    <input
                      className={Styles.checkbox}
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                    />
                    I accept the Terms of Use & Privacy Policy.
                  </label>
                </div>
                <button type="submit" className={Styles.button}>
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
