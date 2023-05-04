import React from "react";
import Footer from "../components/Footer";
import HeroLogin from "../components/HeroLogin";

const Login = ({ addToken, addAdmin }) => {
  return (
    <>
      <HeroLogin addToken={addToken} addAdmin={addAdmin}>
        <Footer />
      </HeroLogin>
    </>
  );
};

export default Login;
