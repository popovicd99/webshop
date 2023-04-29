import React from "react";
import Footer from "../components/Footer";
import HeroLogin from "../components/HeroLogin";

const Login = ({ addToken }) => {
  return (
    <>
      <HeroLogin addToken={addToken}>
        <Footer />
      </HeroLogin>
    </>
  );
};

export default Login;
