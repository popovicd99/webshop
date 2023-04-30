import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import OneTableProduct from "./OneTableProduct";
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
const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 0;
`;
const TableHead = styled.thead`
  background: none;
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  color: dark-gray;
  font-weight: 500;
`;
const TableHeadText = styled.a`
  color: #8a8a8a;
`;
const TableBody = styled.tbody`
  border: 1px solid #e1e1e1;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
`;
const Button = styled.div`
  width: 100px;
  margin-top: 10px;
`;

const Admin = ({ children }) => {
  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    price: "",
  });
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (products == null) {
      axios
        .get("api/products")
        .then((res) => {
          setProducts(res.data.products);
        })
        .catch((ex) => {
          console.log(ex);
        });
    }
  }, []);

  function handleInput(e) {
    let data = productData;
    data[e.target.name] = e.target.value;
    setProductData(data);
  }

  function handleImages(e) {
    let data = productData;
    data["pictures"] = e.target.files;
    setProductData(data);
    console.log(productData);
  }

  function handleAddProduct(e) {
    e.preventDefault();
    axios
      .post("api/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        document.getElementById("popupadd").style.display = "none";
        axios
          .get("api/products")
          .then((res) => {
            setProducts(res.data.products);
          })
          .catch((ex) => {
            console.log(ex);
          });
        console.log(res);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  return (
    <>
      <div id="popupadd" className="popup">
        <form
          method="POST"
          className="popup-content animate"
          onSubmit={handleAddProduct}
        >
          <div
            className="close"
            onClick={() =>
              (document.getElementById("popupadd").style.display = "none")
            }
          >
            &times;
          </div>
          <div className="sign-in-form">
            <h4 className="text-center">New Product</h4>
            <label htmlFor="product">Product name</label>
            <input
              type="text"
              name="name"
              className="field"
              onInput={handleInput}
              required
            />

            <label htmlFor="desc">Description</label>
            <input
              type="text"
              name="desc"
              className="field"
              onInput={handleInput}
              required
            />

            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              className="field"
              onInput={handleInput}
              required
            />
            <label htmlFor="images">Price</label>
            <input
              type="file"
              className="field"
              onChange={handleImages}
              required
              multiple
            />
            <button type="submit" className="sign-in-form-button">
              Add
            </button>
          </div>
        </form>
      </div>
      <HeroWrap>
        <HeroContent>
          <Button
            className="button white-hollow"
            onClick={() =>
              (document.getElementById("popupadd").style.display = "block")
            }
          >
            Add new Product
          </Button>
          <Table className="stacked">
            <colgroup>
              <col width="100" />
              <col width="200" />
              <col width="200" />
              <col width="200" />
              <col width="200" />
            </colgroup>
            <TableHead>
              <tr>
                <th>
                  <TableHeadText>Picture</TableHeadText>
                </th>
                <th>
                  <TableHeadText>Product name</TableHeadText>
                </th>
                <th>
                  <TableHeadText>Desc</TableHeadText>
                </th>
                <th>
                  <TableHeadText>Price</TableHeadText>
                </th>
                <th>
                  <TableHeadText>Options</TableHeadText>
                </th>
              </tr>
            </TableHead>
            <TableBody>
              {products == null ? (
                <></>
              ) : (
                products.map((product) => {
                  return (
                    <>
                      <OneTableProduct product={product} key={""} />
                    </>
                  );
                })
              )}
            </TableBody>
          </Table>
        </HeroContent>
      </HeroWrap>
      {children}
    </>
  );
};

export default Admin;
