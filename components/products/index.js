import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap"; // Import Button component from react-bootstrap
import Link from "next/link";
import Ratings from "../lendingPage/Ratings";

const AllProdect = () => {
  const [proData, setProData] = useState([]);
  const [cart, setCart] = useState([]); // State for managing cart items

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data.products);
        setProData(data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Function to handle adding product to cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart array
  };

  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <Container>
        <div className="row">
          {proData.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-12">
              <Card className="single-product">
                <Carousel>
                  {product.images.map((imageUrl, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        width={300}
                        height={200}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body className="product-info">
                  <span className="category">{product.category}</span>
                  <h4 className="title">
                    <Link href={`/product-details/${product.id}`}>
                      {product.name}
                    </Link>
                  </h4>
                  <ul className="review">
                    <li>
                      <Ratings stars={product.rating} />
                      <span>{product.reviews} Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>${product.price}</span>
                  </div>
                  <Button onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>{" "}
                  {/* Add to Cart button */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllProdect;
