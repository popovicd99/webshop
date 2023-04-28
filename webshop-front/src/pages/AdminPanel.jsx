import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Admin from "../components/Admin";

const AdminPanel = () => {
  return (
    <>
      <Navbar></Navbar>
      <Admin></Admin>
      <Footer></Footer>
    </>
  );
};

export default AdminPanel;
