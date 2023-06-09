import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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

const styles = {
  link: {
    fontWeight: "500",
    color: "blue",
  },
};

const HeroLogin = ({ addToken, children, addAdmin, addUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    let data = userData;
    data[e.target.name] = e.target.value;
    setUserData(data);
  }
  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((res) => {
        if (res.data.success === true) {
          addUser(res.data.id);
          addAdmin(res.data.admin);
          addToken(res.data.token);
          navigate("/shop");
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
  return (
    <Container>
      <HeroWrap>
        <HeroContent>
          <Form onSubmit={handleLogin} method="post">
            <Title>Log in with you email account</Title>
            <Label>
              Email
              <Input
                type="email"
                placeholder="somebody@example.com"
                name="email"
                onInput={handleInput}
              />
            </Label>
            <Label>
              Password
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onInput={handleInput}
              />
            </Label>
            <input
              type="submit"
              className="button expanded white-hollow"
              value="Log in"
            />
            <p style={{ fontWeight: 700 }}>
              Not a member?
              <Link style={styles.link} to="/register">
                {" "}
                Register now
              </Link>
            </p>
          </Form>
        </HeroContent>
      </HeroWrap>
      {children}
    </Container>
  );
};

export default HeroLogin;
