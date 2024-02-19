import Link from "next/link";
import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPhoneAlt, FaRegWindowClose } from "react-icons/fa";
import Image from "next/image";

function MiddleBar() {
  return (
    <div className="header-middle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-7">
            <Link className="navbar-brand" href="index.html">
              <Image
                height={100}
                width={100}
                src="/assets/images/logo/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="col-lg-5 col-md-7 d-xs-none">
            <div className="main-menu-search">
              <div className="navbar-search search-style-5">
                <div className="search-select">
                  <div className="select-position">
                    <select id="select1">
                      <option selected="">All</option>
                      <option value={1}>option 01</option>
                      <option value={2}>option 02</option>
                      <option value={3}>option 03</option>
                      <option value={4}>option 04</option>
                      <option value={5}>option 05</option>
                    </select>
                  </div>
                </div>
                <div className="search-input">
                  <input type="text" placeholder="Search" />
                </div>
                <div className="search-btn">
                  <button>
                    {/* <i className="lni lni-search-alt" /> */}
                    <CiSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-5">
            <div className="middle-right-area">
              <div className="nav-hotline">
                <FaPhoneAlt />
                <h3>
                  Hotline:
                  <span>(+100) 123 456 7890</span>
                </h3>
              </div>

              <div className="navbar-cart">
                <div className="wishlist">
                  <Link href="javascript:void(0)">
                    {/* <i className="lni lni-heart" /> */}
                    <CiHeart className="lni-heart" />

                    <span className="total-items">0</span>
                  </Link>
                </div>
                <div className="cart-items">
                  <Link href="javascript:void(0)" className="main-btn">
                    {/* <i className="lni lni-cart" /> */}
                    <MdOutlineShoppingCart className="lni-cart" />

                    <span className="total-items">2</span>
                  </Link>
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <Link href="cart.html">View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="remove"
                          title="Remove this item"
                        >
                          {/* <i className="lni lni-close" /> */}
                          <FaRegWindowClose />
                        </Link>
                        <div className="cart-img-head">
                          <Link
                            className="cart-img"
                            href="product-details.html"
                          >
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/header/cart-items/item1.jpg"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="product-details.html">
                              Apple Watch Series 6
                            </Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">$99.00</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="remove"
                          title="Remove this item"
                        >
                          <i className="lni lni-close" />
                        </Link>
                        <div className="cart-img-head">
                          <Link
                            className="cart-img"
                            href="product-details.html"
                          >
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/header/cart-items/item2.jpg"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="product-details.html">
                              Wi-Fi Smart Camera
                            </Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">$35.00</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div>
                      <div className="button">
                        <Link href="checkout.html" className="btn animate">
                          Checkout
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
    </div>
  );
}
export default MiddleBar;
