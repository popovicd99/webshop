import React from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
const SingleProduct = ({ addToCart }) => {
  const { slug } = useParams();
  return (
    <>
      <Product slug={slug} addToCart={addToCart}></Product>
      <Footer></Footer>
    </>
  );
};

export default SingleProduct;
