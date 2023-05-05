import React from "react";
import Footer from "../components/Footer";
import HeroLogin from "../components/HeroLogin";

const Login = ({ addToken, addAdmin, addUser }) => {
  return (
    <>
      <HeroLogin addToken={addToken} addAdmin={addAdmin} addUser={addUser}>
        <Footer />
      </HeroLogin>
    </>
  );
};

export default Login;
