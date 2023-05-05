import React from "react";
import Footer from "../components/Footer";
import HeroCheckout from "../components/HeroCheckout";

const Checkout = ({ cartProducts, setcartNumber, setcartProducts, user }) => {
  return (
    <>
      <HeroCheckout
        cartProducts={cartProducts}
        setcartNumber={setcartNumber}
        setcartProducts={setcartProducts}
        user={user}
      >
        <Footer />
      </HeroCheckout>
    </>
  );
};

export default Checkout;
