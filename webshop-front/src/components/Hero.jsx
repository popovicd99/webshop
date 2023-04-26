import React from "react";
import styled from "styled-components";

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

const Button = styled.a`
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

const Hero = () => {
  return (
    <Container>
      <HeroWrap>
        <HeroContent>
          <Title>Promo Headline Will Display Here</Title>
          <Description className="hide-for-small-only">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            ante, varius eget lacinia porta, faucibus ut eros. Donec quis dui id
            felis pharetra fermentum.
          </Description>
          <Container>
            <Button href="#" className="button white-hollow">
              Shop now
            </Button>
          </Container>
        </HeroContent>
      </HeroWrap>
    </Container>
  );
};

export default Hero;
