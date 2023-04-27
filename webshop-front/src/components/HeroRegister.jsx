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

const Form = styled.form`
  border: 2px solid #cacaca;
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h4``;

const Label = styled.label`
  color: white;
  font-size: 17px;
  font-weight: 500;
`;

const Input = styled.input`
  border-radius: 10px;
`;

const Link = styled.a`
  font-weight: 500;
  color: blue;
`;

const HeroRegister = () => {
  return (
    <Container>
      <HeroWrap>
        <HeroContent>
          <Form>
            <Title>Become a member. Register now</Title>
            <Label>
              Full name
              <Input type="text" placeholder="e.g. Ben Chillwell" />
            </Label>
            <Label>
              Email
              <Input type="email" placeholder="somebody@example.com" />
            </Label>
            <Label>
              Password
              <Input type="password" placeholder="Password" />
            </Label>
            <input
              type="submit"
              className="button expanded white-hollow"
              value="Register"
            />
            <p style={{ fontWeight: 700 }}>
              Already a member?
              <Link href="#"> Log in now</Link>
            </p>
          </Form>
        </HeroContent>
      </HeroWrap>
    </Container>
  );
};

export default HeroRegister;
