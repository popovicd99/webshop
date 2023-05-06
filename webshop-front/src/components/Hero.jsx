import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div``;

const HeroWrap = styled.div`
  width: 100%;
  text-align: center;
  height: 920px;
  background: dark-gray;
  position: relative;
  color: white;

  overflow: hidden;
  background-image: url(https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/cc5dvskqjobawc4mbygl/sneakerheads-feature?fimg-ssr-default);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid darken(white, 30%);
    transition: border 0.5s ease;
  }

  // overlay
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  line-height: 1.25em;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Button = styled.p`
  border: 1px solid white;
  color: white;
  background-color: transparent;
  transition: border 0.5s ease;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid darken(white, 30%);
    transition: border 0.5s ease;
  }
`;

const Hero = ({ children }) => {
  return (
    <Container>
      <HeroWrap>
        <HeroContent>
          <Title>SNKR</Title>
          <Description className="hide-for-small-only">
            Najveći izbor limitiranih kolekcija patika najpoznatijih svetskih
            brendova.
          </Description>
          <Container>
            <Link to="/shop">
              <Button className="button white-hollow">Shop now</Button>
            </Link>
          </Container>
        </HeroContent>
      </HeroWrap>
      {children}
    </Container>
  );
};

export default Hero;
