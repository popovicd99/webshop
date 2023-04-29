import React from "react";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { Navigate } from "react-router-dom";

const Shop = ({ token }) => {
  if (token == null) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <Products>
          <Footer />
        </Products>
      </>
    );
  }
};

export default Shop;
