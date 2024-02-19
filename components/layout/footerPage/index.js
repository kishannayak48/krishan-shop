import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-12">
                <div className="footer-logo">
                  <Link href="index.html">
                    <Image
                      height={100}
                      width={100}
                      src="/assets/images/logo/white-logo.svg"
                      alt="#"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="footer-newsletter">
                  <h4 className="title">
                    Subscribe to our Newsletter
                    <span>
                      Get all the latest information, Sales and Offers.
                    </span>
                  </h4>
                  <div className="newsletter-form-head">
                    <form
                      action="#"
                      method="get"
                      target="_blank"
                      className="newsletter-form"
                    >
                      <input
                        name="EMAIL"
                        placeholder="Email address here..."
                        type="email"
                      />
                      <div className="button">
                        <button className="btn">
                          Subscribe
                          <span className="dir-part" />
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
      <div className="footer-middle">
        <div className="container">
          <div className="bottom-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-contact">
                  <h3>Get In Touch With Us</h3>
                  <p className="phone">Phone: +1 (900) 33 169 7720</p>
                  <ul>
                    <li>
                      <span>Monday-Friday: </span> 9.00 am - 8.00 pm
                    </li>
                    <li>
                      <span>Saturday: </span> 10.00 am - 6.00 pm
                    </li>
                  </ul>
                  <p className="mail">
                    <Link href="mailto:support@shopgrids.com">
                      support@shopgrids.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer our-app">
                  <h3>Our Mobile App</h3>
                  <ul className="app-btn">
                    <li>
                      <Link href="javascript:void(0)">
                        {/* <i /> */}
                        <FaApple className="lni lni-apple" />

                        <span className="small-title">Download on the</span>
                        <span className="big-title">App Store</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">
                        {/* <i /> */}
                        <IoLogoGooglePlaystore className="lni lni-play-store" />
                        <span className="small-title">Download on the</span>
                        <span className="big-title">Google Play</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Information</h3>
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">About Us</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Downloads</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Sitemap</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">FAQs Page</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Shop Departments</h3>
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        Computers &amp; Accessories
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">
                        Smartphones &amp; Tablets
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">
                        TV, Video &amp; Audio
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">
                        Cameras, Photo &amp; Video
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Headphones</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="inner-content">
            <div className="row align-items-center">
              <div className="col-lg-4 col-12">
                <div className="payment-gateway">
                  <span>We Accept:</span>
                  <Image
                    height={25}
                    width={1000}
                    src="/assets/images/footer/credit-cards-footer.png"
                    alt="#"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="copyright">
                  <p>
                    Designed and Developed by
                    <Link
                      href="https://graygrids.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      GrayGrids
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <ul className="socila">
                  <li>
                    <span>Follow Us On:</span>
                  </li>
                  {/* <li>
                    <Link href="javascript:void(0)">
                      <i className="lni lni-facebook-filled" />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="lni lni-twitter-original" />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="lni lni-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="lni lni-google" />
                    </Link>
                  </li> */}

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
                      <FaGoogle className="lni lni-skype" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
