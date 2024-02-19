<<<<<<< HEAD
import { productionBrowserSourceMaps } from "@/next.config";
import Product from "@/pages/product";
import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
=======
import Link from "next/link";
import React from "react";
>>>>>>> origin/main
// import { NavDropdown } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa6";

function CategoriesBar() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 col-md-6 col-12">
          <div className="nav-inner">
            {/* Start Mega Category Menu */}
            <div className="mega-category-menu">
              <span className="cat-button">
                <i className="lni lni-menu" />
                All Categories
              </span>
              <ul className="sub-category">
                <li>
                  <Link href="/product">
                    Electronics
                    {/* <i className="lni lni-chevron-right" /> */}
                    <FaChevronRight />
                  </Link>
                  <ul className="inner-sub-category">
                    <li>
                      <Link href="product-grids./digitalCamera">
                        Digital Cameras
                      </Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Camcorders</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Camera Drones</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Smart Watches</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Headphones</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">MP3 Players</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Microphones</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Chargers</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">Batteries</Link>
                    </li>
                    <li>
                      <Link href="product-grids.html">
                        Cables &amp; Adapters
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="product-grids.html">accessories</Link>
                </li>
                <li>
                  <Link href="product-grids.html">Televisions</Link>
                </li>
                <li>
                  <Link href="product-grids.html">best selling</Link>
                </li>
                <li>
                  <Link href="product-grids.html">top 100 offer</Link>
                </li>
                <li>
                  <Link href="product-grids.html">sunglass</Link>
                </li>
                <li>
                  <Link href="product-grids.html">watch</Link>
                </li>
                <li>
                  <Link href="product-grids.html">man’s product</Link>
                </li>
                <li>
                  <Link href="product-grids.html">
                    Home Audio &amp; Theater
                  </Link>
                </li>
                <li>
                  <Link href="product-grids.html">
                    Computers &amp; Tablets{" "}
                  </Link>
                </li>
                <li>
                  <Link href="product-grids.html">Video Games </Link>
                </li>
                <li>
                  <Link href="product-grids.html">Home Appliances </Link>
                </li>
              </ul>
            </div>
<<<<<<< HEAD

=======
>>>>>>> origin/main
            {/* End Mega Category Menu */}
            {/* Start Navbar */}
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="index.html"
                      className="active"
                      aria-label="Toggle navigation"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-2"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Pages
                    </Link>
                    <ul className="sub-menu collapse" id="submenu-1-2">
                      <li className="nav-item">
                        <Link href="./about-us">About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="faq.html">Faq</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="login.html">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="register.html">Register</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="mail-success.html">Mail Success</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="404.html">404 Error</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-3"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Shop
                    </Link>
                    <ul className="sub-menu collapse" id="submenu-1-3">
                      <li className="nav-item">
                        <Link href="product-grids.html">Shop Grid</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="product-list.html">Shop List</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="product-details.html">shop Single</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="cart.html">Cart</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="checkout.html">Checkout</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-4"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Blog
                    </Link>
                    <ul className="sub-menu collapse" id="submenu-1-4">
                      <li className="nav-item">
                        <Link href="blog-grid-sidebar.html">
                          Blog Grid Sidebar
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="blog-single.html">Blog Single</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="blog-single-sidebar.html">
                          Blog Single Sibebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="contact.html" aria-label="Toggle navigation">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/* navbar collapse */}
            </nav>
            {/* End Navbar */}
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Nav Social */}
          <div className="nav-social">
            <h5 className="title">Follow Us:</h5>
            <ul>
              <li>
                <Link href="javascript:void(0)">
                  {/* <i className="lni lni-facebook-filled" /> */}
                  <FaFacebookF className="lni lni-facebook-fille" />
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)">
                  {/* <i className="lni lni-twitter-original" /> */}
                  <FaTwitter className="lni lni-twitter-original" />
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)">
                  {/* <i className="lni lni-instagram" /> */}
                  <FaInstagram className="lni lni-instagram" />
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)">
                  {/* <i className="lni lni-skype" /> */}
                  <FaSkype className="lni lni-skype" />
                </Link>
              </li>
            </ul>
          </div>
          {/* End Nav Social */}
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;
