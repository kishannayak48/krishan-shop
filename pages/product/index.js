import LayoutPage from "@/components/layout";
import AllProdect from "@/components/products";
import React from "react";

function Product() {
  return <AllProdect />;
}
Product.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
export default Product;
