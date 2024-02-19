<<<<<<< HEAD
import Button from "react-bootstrap/Button";
=======
// import Button from "react-bootstrap/Button";
>>>>>>> origin/main
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Ratings from "../lendingPage/Ratings";

const AllProdect = () => {
  const [proData, setProData] = useState([]);

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

  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <Container>
        <div className="row">
<<<<<<< HEAD
=======

>>>>>>> origin/main
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
                    <span>{product.price}</span>
                  </div>
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
<<<<<<< HEAD
=======
// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
>>>>>>> origin/main
