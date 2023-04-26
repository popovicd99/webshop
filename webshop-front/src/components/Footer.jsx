import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const FooterWrap = styled.div`
  background-color: $white;
  padding: 50px 20px 30px 20px;
`;
const FooterTop = styled.div``;
const FooterTopLeft = styled.div``;
const ContainerRow = styled.div`
  @media screen and (max-width: 63.9375em) {
    margin-bottom: 3rem;
  }
`;
const FooterTopRight = styled.div``;

const FooterBottom = styled.div`
  border-top: 1px solid #e6e6e6;
  margin-top: 40px;
  padding-bottom: 80px;
  padding-top: 30px;
`;
const FooterBottomLeft = styled.div``;
const FooterBottomRight = styled.div``;

const MenuName = styled.h5`
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Menu = styled.ul``;
const MenuItem = styled.li``;
const MenuText = styled.a`
  line-height: 1.5em;
  padding: 0.5rem 0rem;

  color: #707070;
  font-size: 1rem;
  transition: all 0.5s ease;

  &:hover {
    color: #0a0a0a;
    transition: all 0.5s ease;
  }
`;

const MenuBottom = styled.ul`
  margin-top: 0.65rem;
  margin-left: 0;
  @media screen and (max-width: 39.9375em) {
    text-align: center;
  }
`;
const MenuBottomItem = styled.li`
  display: inline;
  padding-right: 2rem;
  @media screen and (max-width: 39.9375em) {
    text-align: center;
  }
`;
const MenuBottomText = styled.a`
  line-height: 1.2em;
  padding: 10px 0;

  color: #8a8a8a;
  font-size: 0.9rem;
  transition: all 0.5s ease;

  &:hover {
    color: #0a0a0a;
    transition: all 0.5s ease;
  }
`;

const Copyright = styled.div`
  color: #8a8a8a;
  font-size: 0.9rem;
  line-height: 1.2em;
  padding-top: 1rem;
  text-align: right;
  @media screen and (max-width: 39.9375em) {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        <FooterTop className="row">
          <FooterTopLeft className="small-12 medium-12 large-6 columns">
            <ContainerRow className="row">
              <Container className="small-4 medium-4 large-4 columns">
                <MenuName>Help</MenuName>
                <Menu className="menu vertical">
                  <MenuItem>
                    <MenuText href="#">FAQs</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Return Policy</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Shipping &amp; Delivery</MenuText>
                  </MenuItem>
                </Menu>
              </Container>
              <Container className="small-4 medium-4 large-4 columns">
                <MenuName>Help</MenuName>
                <Menu className="menu vertical">
                  <MenuItem>
                    <MenuText>FAQs</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Return Policy</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Shipping &amp; Delivery</MenuText>
                  </MenuItem>
                </Menu>
              </Container>
            </ContainerRow>
          </FooterTopLeft>
          <FooterTopRight className="small-12 medium-12 large-6 columns">
            <Container className="row">
              <Container className="small-4 medium-4 large-4 columns">
                <MenuName>About</MenuName>
                <Menu className="menu vertical">
                  <MenuItem>
                    <MenuText href="#">Company</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Store Locator</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Team</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Support</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Contact</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Career</MenuText>
                  </MenuItem>
                </Menu>
              </Container>
              <Container className="small-4 medium-4 large-4 columns">
                <MenuName>Social</MenuName>
                <Menu className="menu vertical">
                  <MenuItem>
                    <MenuText href="#">Facebook</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Twitter</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Instagram</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText href="#">Youtube</MenuText>
                  </MenuItem>
                </Menu>
              </Container>
            </Container>
          </FooterTopRight>
        </FooterTop>
        <FooterBottom className="row">
          <FooterBottomLeft className="small-12 medium-5 columns">
            <MenuBottom>
              <MenuBottomItem>
                <MenuBottomText href="#">Privacy Policy</MenuBottomText>
              </MenuBottomItem>
              <MenuBottomItem>
                <MenuBottomText href="#">Terms &amp; Conditions</MenuBottomText>
              </MenuBottomItem>
            </MenuBottom>
          </FooterBottomLeft>
          <FooterBottomRight className="small-12 medium-5 columns">
            <Copyright>
              <span>©2017 Company Name. All rights reserved.</span>
            </Copyright>
          </FooterBottomRight>
        </FooterBottom>
      </FooterWrap>
    </Container>
  );
};

export default Footer;
