import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

const Product = ({ slug, addToCart }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (product == null) {
      axios
        .get("api/product/" + slug)
        .then((res) => {
          if (res.data.product == null) {
            navigate("/");
          } else {
            setProduct(res.data.product);
          }
        })
        .catch((ex) => {
          console.log(ex);
        });
    }
  }, [product]);

  function plus() {
    var $input = $(".message-input").find("input");
    var val = parseInt($input.val(), 10);
    $input.val(val + 1);
  }

  function minus() {
    var $input = $(".message-input").find("input");
    var val = parseInt($input.val(), 10);
    $input.val(val - 1);
  }

  function validateProduct() {
    var size = $(".size").find(":selected").attr("id");
    var available = $(".size").find(":selected").val();
    var $input = $(".message-input").find("input");
    var quantity = parseInt($input.val(), 10);
    if (quantity < 0) {
      alert("Quantity can't be negative");
      return;
    }
    if (available < quantity) {
      alert("Not enough products in stock !");
    } else {
      var orderedProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        picture: product.pictures[0],
        sizes: [
          {
            size: size,
            quantity: quantity,
          },
        ],
      };
      addToCart(orderedProduct);
    }
  }

  return (
    <>
      {product == null ? (
        <></>
      ) : (
        <div className="row" style={{ padding: 50 }}>
          <div className="medium-6 columns">
            <img
              className="thumbnail"
              src={
                product.pictures[0] != null
                  ? "/products/" + product.pictures[0].file_path
                  : "https://placehold.it/650x300"
              }
            />
            <div className="row small-up-4">
              <div className="column">
                <img
                  className="thumbnail"
                  src={
                    product.pictures[1] != null
                      ? "/products/" + product.pictures[1].file_path
                      : "https://placehold.it/250x200"
                  }
                />
              </div>
              <div className="column">
                <img
                  className="thumbnail"
                  src={
                    product.pictures[2] != null
                      ? "/products/" + product.pictures[2].file_path
                      : "https://placehold.it/250x200"
                  }
                />
              </div>
              <div className="column">
                <img
                  className="thumbnail"
                  src={
                    product.pictures[3] != null
                      ? "/products/" + product.pictures[3].file_path
                      : "https://placehold.it/250x200"
                  }
                />
              </div>
              <div className="column">
                <img
                  className="thumbnail"
                  src={
                    product.pictures[4] != null
                      ? "/products/" + product.pictures[4].file_path
                      : "https://placehold.it/250x200"
                  }
                />
              </div>
            </div>
          </div>
          <div className="medium-6 large-5 columns">
            <h3>{product.name}</h3>
            <p>{product.desc}</p>

            <label>
              Size
              <select className="size">
                {product.sizes.map((size) => {
                  if (size.quantity === 0) {
                    return (
                      <>
                        <option id={size.size} value={size.quantity} disabled>
                          {size.size + " - " + size.quantity + " left"}
                        </option>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <option id={size.size} value={size.quantity}>
                          {size.size + " - " + size.quantity + " left"}
                        </option>
                      </>
                    );
                  }
                })}
              </select>
            </label>

            <div className="row">
              <div className="mobile-app-message-bar">
                <button className="plus-button" onClick={minus}>
                  <FiMinusSquare />
                </button>
                <div className="message-input">
                  <input type="text" name="" defaultValue="1" required />
                </div>
                <button className="plus-button" onClick={plus}>
                  <FiPlusSquare />
                </button>
              </div>
            </div>

            <div className="button large expanded" onClick={validateProduct}>
              Add to cart
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
