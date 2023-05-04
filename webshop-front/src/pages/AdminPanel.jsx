import React from "react";
import Footer from "../components/Footer";
import Admin from "../components/Admin";
import { Navigate } from "react-router-dom";

const AdminPanel = ({ token, admin }) => {
  if (token == null) {
    return <Navigate to="/login" />;
  } else if (admin !== 0) {
    return (
      <>
        <Admin token={token}>
          <Footer />
        </Admin>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminPanel;
