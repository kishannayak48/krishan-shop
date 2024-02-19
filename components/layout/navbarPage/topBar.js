import Link from "next/link";
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
// import { MdSupervisorAccount } from "react-icons/md";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-left">
              <ul className="menu-top-link">
                <li>
                  <div className="select-position">
                    <select id="select4">
                      <option value={0} selected="">
                        $ USD
                      </option>
                      <option value={1}>€ EURO</option>
                      <option value={2}>$ CAD</option>
                      <option value={3}>₹ INR</option>
                      <option value={4}>¥ CNY</option>
                      <option value={5}>৳ BDT</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="select-position">
                    <select id="select5">
                      <option value={0} selected="">
                        English
                      </option>
                      <option value={1}>Español</option>
                      <option value={2}>Filipino</option>
                      <option value={3}>Français</option>
                      <option value={4}>العربية</option>
                      <option value={5}>हिन्दी</option>
                      <option value={6}>বাংলা</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-middle">
              <ul className="useful-links">
                <li>
                  <Link href="./home">Home</Link>
                </li>
                <li>
                  <Link href="./about">About Us</Link>
                </li>
                <li>
                  <Link href="./contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-end">
              <div className="user">
                {/* <i className="lni lni-c" /> */}
                <FaRegUser style={{ color: "red", fontSize: "20px" }} /> Hello
              </div>
              <ul className="user-login">
                <BiUserCircle style={{ color: "red", fontSize: "25px" }} />
                <li>
                  <Link href="./login">Login </Link>
                </li>

                <li>
                  <Link href="./signUp">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
