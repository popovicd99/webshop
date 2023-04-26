import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
`;

const Wrap = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 4px;
`;

const Input = styled.input`
  border: none;
  &:focus,
  &:active {
    border: none;
  }
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
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 17px;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrap>
        <Left>
          <Logo>SNKR</Logo>
          <SearchContainer>
            <Input />
            <FiSearch style={{ cursor: "pointer", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <CenterItem>PRODUCTS</CenterItem>
        </Center>
        <Right>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>
            <FiShoppingCart /> 0
          </MenuItem>
        </Right>
      </Wrap>
    </Container>
  );
};

export default Navbar;
