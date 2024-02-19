import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import styles from "./loginPage.module.css"; // Import CSS file for styling
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call, validation, etc.)
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <div
        className="container-fluid vh-100 overflow-auto"
        style={{
          // backgroundImage: 'url("assets/images/banner/banner-2-bg.jpg")',
          backgroundSize: "cover",
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.background}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* <h3 className={styles.heading}>Login Here</h3> */}
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Email or Phone"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="btn fw-bold mb-0 btn-outline-success  px-5 rounded-pill "
          >
            Log In
          </button>
          <Link href="./signUp">
            <button className="btn fw-bold mb-0 btn-outline-success  px-5 rounded-pill ">
              Sign Up
            </button>
          </Link>
          <div className={styles.social}>
            <div className={`${styles.social} ${styles.socialFb}`}>
              <FaGoogle className={styles.icon} /> Google
            </div>
            <div className={`${styles.social} ${styles.socialFb}`}>
              <FaFacebook className={styles.icon} /> Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
