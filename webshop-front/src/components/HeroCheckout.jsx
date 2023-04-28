import React from "react";
import styled from "styled-components";
import $ from "jquery";
import { Accordion } from "foundation-sites";

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

const HeroCheckout = () => {
  new Accordion($(".accordion"), {
    slideSpeed: 500,
    multiExpand: false,
  });
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
                                placeholder="First Name"
                                required
                              />
                              <input
                                type="text"
                                placeholder="Last Name"
                                required
                              />
                              <input
                                type="text"
                                placeholder="Address"
                                required
                              />
                              <div className="row">
                                <div className="small-12 medium-7 column">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    required
                                  />
                                </div>
                                <div className="small-6 medium-3 column">
                                  <input
                                    type="text"
                                    placeholder="ZIP"
                                    required
                                  />
                                </div>
                              </div>

                              <div>
                                <hr className="multi-step-checkout-form-divider" />
                              </div>
                              <input type="text" placeholder="Email" required />
                              <input type="text" placeholder="Phone" required />
                            </label>
                          </div>
                          <button className="primary button expanded">
                            Continue to Payment
                          </button>
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
                            <input
                              type="text"
                              placeholder="Card Number"
                              required
                            />
                            <div className="row small-up-1 large-up-3">
                              <div className="small-4 medium-7 column column-block">
                                <select required>
                                  <option value="january">01</option>
                                  <option value="february">02</option>
                                  <option value="march">03</option>
                                  <option value="april">04</option>
                                </select>
                              </div>
                              <div className="small-4 medium-7 column column-block">
                                <select required>
                                  <option value="year1">2019</option>
                                  <option value="year2">2018</option>
                                  <option value="year3">2017</option>
                                  <option value="year4">2016</option>
                                </select>
                              </div>
                              <div className="small-4 medium-7 column column-block">
                                <input type="text" placeholder="CVV" required />
                              </div>
                            </div>

                            <div>
                              <hr className="multi-step-checkout-form-divider" />
                            </div>

                            <button className="primary button expanded">
                              Continue to Review Order
                            </button>
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
                        <tr className="order-item">
                          <td>
                            <img
                              className="order-product-image"
                              src="https://placehold.it/100x100"
                            />
                          </td>
                          <td>
                            <span className="order-product-title">
                              Product 1
                            </span>{" "}
                            <span className="order-product-vendor">
                              Vendor 1
                            </span>
                            <ul className="order-product-info">
                              <li>Name</li>
                              <li>Size: 43</li>
                            </ul>
                          </td>
                          <td>
                            <span className="show-for-small-only">Qty:</span> 1
                          </td>
                          <td>
                            <span className="show-for-small-only">
                              Price Each:{" "}
                            </span>
                            <span className="order-product-price">$25.00</span>
                            <span className="show-for-small-only">,</span>
                            <br className="hide-for-small-only" />
                          </td>
                          <td>
                            <span className="show-for-small-only">Total: </span>
                            <span className="order-product-total">$25.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="">
                      <form>
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
    </>
  );
};

export default HeroCheckout;
