import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
`;

const Wrap = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 390px) {
    padding: 10px 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterItem = styled.h5`
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 39.9375em) {
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 39.9375em) {
    justify-content: center;
  }
`;

const MenuItem = styled.div`
  font-size: 17px;
  padding: 13px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 39.9375em) {
    font-size: 12px;
    margin-left: 5px;
  }
`;

const Navbar = ({ token, addToken, admin, addAdmin, cartNumber }) => {
  const navigate = useNavigate();
  function handleLogout(e) {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        addToken(null);
        addAdmin(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Container>
      <Wrap>
        <Left>
          <Link to="/" style={{ color: "black" }}>
            <Logo>SNKR</Logo>
          </Link>
        </Left>
        <Center>
          <Link to="/shop" style={{ color: "black" }}>
            <CenterItem>PRODUCTS</CenterItem>
          </Link>
        </Center>
        <Right>
          {token == null ? (
            <>
              <Link to="/login" style={{ color: "black" }}>
                <MenuItem>LOGIN</MenuItem>
              </Link>
              <Link to="/register" style={{ color: "black" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/checkout" style={{ color: "black" }}>
                <MenuItem>
                  <FiShoppingCart /> 0
                </MenuItem>
              </Link>
            </>
          ) : admin === 1 ? (
            <>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
              <Link to="/adminpanel" style={{ color: "black" }}>
                <MenuItem>Admin panel</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
              <Link to="/checkout" style={{ color: "black" }}>
                <MenuItem>
                  <FiShoppingCart /> {cartNumber}
                </MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrap>
      <Outlet />
    </Container>
  );
};

export default Navbar;
