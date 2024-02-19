import React, { useEffect, useState } from "react";
const Product = ({ product }) => (
  <li key={product.id}>
    <img
      src={product.image}
      alt={product.title}
      style={{ maxWidth: "100px", maxHeight: "100px" }}
    />
    <div>
      <strong>{product.title}</strong>: ${product.price}
    </div>
  </li>
);
function ProductList(prop) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
      // You can set the data to state or perform other operations here
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {/* Use the Product component for each product */}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
