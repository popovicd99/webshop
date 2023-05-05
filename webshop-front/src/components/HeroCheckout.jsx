import React from "react";
import styled from "styled-components";
import $ from "jquery";
import axios from "axios";
import { Accordion } from "foundation-sites";
import { useEffect, useState } from "react";

const Container = styled.div``;

const HeroWrap = styled.div`
  width: 100%;
  text-align: center;
  height: 1300px;
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

const HeroCheckout = ({
  children,
  cartProducts,
  setcartNumber,
  setcartProducts,
  user,
}) => {
  const [orderData, setOrderData] = useState({
    phone: "",
    adress: "",
    city: "",
    postcode: "",
    user_id: "",
    product_id: [],
  });

  function handleInput(e) {
    let data = orderData;
    data[e.target.name] = e.target.value;
    setOrderData(data);
  }

  function handleAddOrder(e) {
    e.preventDefault();
    cartProducts.products.forEach((element) => {
      orderData["product_id"].push(element.id);
      setOrderData(orderData);
    });
    orderData["user_id"] = user;
    axios
      .post("api/orders", orderData)
      .then((res) => {
        axios
          .post("api/product", cartProducts)
          .then((res) => {
            setcartProducts({
              products: [],
              sum: 0,
            });
            setcartNumber(0);
            alert("Uspesna porudzbina!");
          })
          .catch((ex) => {
            console.log(ex);
          });
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  useEffect(() => {
    new Accordion($(".accordion"), {
      slideSpeed: 500,
      multiExpand: false,
    });
  }, []);

  return (
    <>
      <HeroWrap>
        <HeroContent>
          <div className="multi-step-checkout-process">
            <div className="multi-step-checkout-process-step">
              <ul className="accordion" data-accordion>
                <li className="accordion-item is-active" data-accordion-item>
                  <a href="#" className="accordion-title">
                    1. Shipping{" "}
                    <span className="multi-step-checkout-step-title-subheader">
                      Step 1 of 3
                    </span>
                  </a>
                  <div className="accordion-content" data-tab-content>
                    <form className="multi-step-checkout-form">
                      <div className="row">
                        <div className="small-12 medium-9 column">
                          <div className="shipping-address multi-step-checkout-step-section">
                            <h6 className="multi-step-checkout-step-subheader">
                              Shipping Address
                            </h6>
                            <p className="multi-step-checkout-step-subdesc">
                              Please enter your shipping address. Only USPS
                              ships to APO, FPO, or PO Boxes.{" "}
                              <a href="#" className="text-link">
                                Shipping Rates and Delivery Times
                              </a>
                            </p>

                            <label>
                              <input
                                type="text"
                                placeholder="Address"
                                name="adress"
                                onInput={handleInput}
                                required
                              />
                              <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                onInput={handleInput}
                                required
                              />
                              <div className="row">
                                <div className="small-12 medium-7 column">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    onInput={handleInput}
                                    required
                                  />
                                </div>
                                <div className="small-6 medium-3 column">
                                  <input
                                    type="text"
                                    placeholder="ZIP"
                                    name="postcode"
                                    onInput={handleInput}
                                    required
                                  />
                                </div>
                              </div>
                              <input
                                type="text"
                                placeholder="Phone"
                                required
                                name="phone"
                                onInput={handleInput}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li className="accordion-item" data-accordion-item>
                  <a href="#" className="accordion-title">
                    2. Payment{" "}
                    <span className="multi-step-checkout-step-title-subheader">
                      Step 2 of 3
                    </span>
                  </a>
                  <div className="accordion-content" data-tab-content>
                    <form className="multi-step-checkout-form">
                      <div className="row">
                        <div className="small-12 medium-9 column">
                          <div className="multi-step-checkout-credit-card-info">
                            <h6 className="multi-step-checkout-step-subheader">
                              Credit Card
                            </h6>
                            <input type="text" placeholder="Card Number" />
                            <div className="row small-up-1 large-up-3">
                              <div className="small-4 medium-7 column column-block">
                                <select>
                                  <option value="january">01</option>
                                  <option value="february">02</option>
                                  <option value="march">03</option>
                                  <option value="april">04</option>
                                </select>
                              </div>
                              <div className="small-4 medium-7 column column-block">
                                <select>
                                  <option value="year1">2019</option>
                                  <option value="year2">2018</option>
                                  <option value="year3">2017</option>
                                  <option value="year4">2016</option>
                                </select>
                              </div>
                              <div className="small-4 medium-7 column column-block">
                                <input type="text" placeholder="CVV" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li className="accordion-item" data-accordion-item>
                  <a href="#" className="accordion-title">
                    3. Review Order{" "}
                    <span className="multi-step-checkout-step-title-subheader">
                      Step 3 of 3
                    </span>
                  </a>
                  <div className="accordion-content" data-tab-content>
                    <hr className="show-for-small-only order-table-divider" />
                    <table className="order-table-content stack">
                      <thead>
                        <tr>
                          <th width="120">Order</th>
                          <th width="350"></th>
                          <th width="80">Quantity</th>
                          <th width="100">Price Each</th>
                          <th width="60">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts == null ? (
                          <></>
                        ) : (
                          cartProducts.products.map((product) => {
                            return (
                              <tr className="order-item" key={product.id}>
                                <td>
                                  <img
                                    className="order-product-image"
                                    src={
                                      product.picture != null
                                        ? "/products/" +
                                          product.picture.file_path
                                        : "https://placehold.it/100x100"
                                    }
                                  />
                                </td>
                                <td>
                                  <span className="order-product-title">
                                    {product.name}
                                  </span>
                                  <ul className="order-product-info">
                                    <li>
                                      Size:{" "}
                                      {product.sizes.map((size) => {
                                        return size.size + ",";
                                      })}
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <span className="show-for-small-only">
                                    Qty:
                                  </span>
                                  {product.sizes.map((size) => {
                                    return size.quantity + ",";
                                  })}
                                </td>
                                <td>
                                  <span className="show-for-small-only">
                                    Price Each:
                                  </span>
                                  <span className="order-product-price">
                                    ${product.price}
                                  </span>
                                  <span className="show-for-small-only">,</span>
                                  <br className="hide-for-small-only" />
                                </td>
                                <td>
                                  <span className="show-for-small-only">
                                    Total:
                                  </span>
                                  <span className="order-product-total">
                                    ${product.sum}
                                  </span>
                                </td>
                              </tr>
                            );
                          })
                        )}
                        <tr className="order-item">
                          <td></td>
                          <td>
                            <span className="order-product-title"></span>
                            <ul className="order-product-info"></ul>
                          </td>
                          <td>
                            <span className="show-for-small-only"></span>
                          </td>
                          <td>
                            <span className="show-for-small-only"></span>
                            <span className="order-product-price"></span>
                            <span className="show-for-small-only">,</span>
                            <br className="hide-for-small-only" />
                          </td>
                          <td>
                            <span className="show-for-small-only">Total:</span>
                            <span className="order-product-total">
                              ${cartProducts.sum}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="">
                      <form method="POST" onSubmit={handleAddOrder}>
                        <button className="primary button expanded">
                          Submit Order
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </HeroContent>
      </HeroWrap>
      {children}
    </>
  );
};

export default HeroCheckout;
