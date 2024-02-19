import Link from "next/link";
import React from "react";
import Ratings from "./Ratings";

const TrendingProduct = () => {
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Product</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-1.jpg" alt="#" />
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Watches</span>
                <h4 className="title">
                  <Link href="product-grids.html">Xiaomi Mi Band 5</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={4.2} />

                    <span>4.2 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$199.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-2.jpg" alt="#" />
                <span className="sale-tag">-25%</span>
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Speaker</span>
                <h4 className="title">
                  <Link href="product-grids.html">Big Power Sound Speaker</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={4.9} />

                    <span>4.9 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$275.00</span>
                  <span className="discount-price">$300.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-3.jpg" alt="#" />
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Camera</span>
                <h4 className="title">
                  <Link href="product-grids.html">WiFi Security Camera</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={4.5} />

                    <span>4.5 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$399.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-4.jpg" alt="#" />
                <span className="new-tag">New</span>
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Phones</span>
                <h4 className="title">
                  <Link href="product-grids.html">iphone 6x plus</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={5.4} />

                    <span>5.4 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$400.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-5.jpg" alt="#" />
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Headphones</span>
                <h4 className="title">
                  <Link href="product-grids.html">Wireless Headphones</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={4.3} />

                    <span>4.3 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$350.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-6.jpg" alt="#" />
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Speaker</span>
                <h4 className="title">
                  <Link href="product-grids.html">Mini Bluetooth Speaker</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={4.2} />

                    <span>4.2 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$70.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-7.jpg" alt="#" />
                <span className="sale-tag">-50%</span>
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Headphones</span>
                <h4 className="title">
                  <Link href="product-grids.html">PX7 Wireless Headphones</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={4.3} />

                    <span>4.3 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$100.00</span>
                  <span className="discount-price">$200.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
              <div className="product-image">
                <img src="assets/images/products/product-8.jpg" alt="#" />
                <div className="button">
                  <Link href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Laptop</span>
                <h4 className="title">
                  <Link href="product-grids.html">Apple MacBook Air</Link>
                </h4>
                <ul className="review">
                  <li>
                    <Ratings stars={5.1} />
                    <span>5.1 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$899.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
