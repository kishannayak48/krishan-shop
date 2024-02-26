import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import Ratings from "@/components/lendingPage/Ratings";

const CategoryPage = () => {
  const [laptopProducts, setLaptopProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const laptopItems = data.products.filter(
          (product) => product.category.toLowerCase() === "laptop"
        );
        setLaptopProducts(laptopItems.slice(0, 8)); // Display only the first 8 laptop items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Laptops</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {laptopProducts.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className="single-product">
                <div className="product-image">
                  <Carousel>
                    {product.images.map((imageUrl, imgIndex) => (
                      <Carousel.Item key={imgIndex}>
                        <img
                          src={imageUrl}
                          className="d-block w-100"
                          alt={`Product ${index + 1}`}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className="button">
                    <Link
                      href={`/product-details/${product.id}`}
                      className="btn"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">{product.category}</span>
                  <h4 className="title">
                    <Link href={`/product-grids/${product.id}`}>
                      {product.title}
                    </Link>
                  </h4>
                  <ul className="review">
                    <li>
                      <Ratings stars={product.rating} />
                      <span>{product.reviews} Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
