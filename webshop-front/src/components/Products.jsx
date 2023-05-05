import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import OneProduct from "./OneProduct";

const Wrap = styled.div``;
const WrapLeft = styled.div``;
const WrapRight = styled.div``;
const Filters = styled.div`
  padding: 0.5rem 1.5rem;
  background-color: #fefefe;
`;

const FilterHeader = styled.h1`
  font-size: 1.25rem;
  padding-top: 0.5rem;
`;

const FilterTab = styled.li`
  border-top: 1px solid #e6e6e6;
`;

const FilterName = styled.a`
  padding-left: 0;
  color: #4a4a4a;
  font-size: 0.85rem;
  font-weight: 600;
`;

const Label = styled.label`
  color: #8a8a8a;
`;

const Products = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [fltrSize, setfltrSize] = useState(0);
  const [fltrPrice, setfltrPrice] = useState(0);
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

  useEffect(() => {
    var string;
    if (fltrSize != 0 || fltrPrice != 0) {
      string = "?size=" + fltrSize + "&price=" + fltrPrice;
      axios
        .get("api/filter" + string)
        .then((res) => {
          var temp = res.data.products;
          temp = temp.filter((item) => !(item["sizes"] == 0));
          setProducts(temp);
        })
        .catch((ex) => {
          console.log(ex);
        });
    }
  }, [fltrSize, fltrPrice]);

  function search(e) {
    var searchValue = e.target.value;
    if (searchValue != "") {
      axios
        .get("api/search/" + searchValue)
        .then((res) => {
          setProducts(res.data.products);
        })
        .catch((ex) => {
          console.log(ex);
        });
    }
  }
  function filterSize(e) {
    setfltrSize(e.target.id);
  }

  function filterPrice(e) {
    setfltrPrice(e.target.id);
  }
  return (
    <>
      <Wrap className="row expanded">
        <WrapLeft className="columns medium-3 large-2">
          <Filters>
            <ul className="vertical menu hide-for-small-only">
              <FilterHeader className="hide-for-small-only">
                Filters
              </FilterHeader>
              <FilterTab>
                <FilterName>Search</FilterName>
                <div className="input-group">
                  <input
                    className="input-group-field"
                    placeholder="Unesite naziv proizvoda"
                    type="search"
                    style={{ borderRadius: 30 }}
                    onInput={search}
                  />
                </div>
              </FilterTab>
              <FilterTab>
                <FilterName>Size</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input
                      id="42"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>42</Label>
                  </li>
                  <li>
                    <input
                      id="43"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>43</Label>
                  </li>
                  <li>
                    <input
                      id="44"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>44</Label>
                  </li>
                  <li>
                    <input
                      id="45"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>45</Label>
                  </li>
                  <li>
                    <input
                      id="46"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>46</Label>
                  </li>
                  <li>
                    <input
                      id="47"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>47</Label>
                  </li>
                </ul>
              </FilterTab>
              <FilterTab>
                <FilterName>Price</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input
                      id="1"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>Under $25</Label>
                  </li>
                  <li>
                    <input
                      id="2"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$25–$50</Label>
                  </li>
                  <li>
                    <input
                      id="3"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$50–$250</Label>
                  </li>
                  <li>
                    <input
                      id="4"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$250–$600</Label>
                  </li>
                  <li>
                    <input
                      id="5"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$600–$1,000</Label>
                  </li>
                </ul>
              </FilterTab>
            </ul>

            <ul className="vertical menu show-for-small-only">
              <FilterHeader className="show-for-small-only">
                Filters
              </FilterHeader>
              <FilterTab>
                <FilterName>Search</FilterName>
                <div className="input-group">
                  <input
                    className="input-group-field"
                    placeholder="Unesite naziv proizvoda"
                    type="search"
                    style={{ borderRadius: 30 }}
                    onInput={search}
                  />
                </div>
              </FilterTab>
              <FilterTab>
                <FilterName>Size</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input
                      id="42"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>42</Label>
                  </li>
                  <li>
                    <input
                      id="43"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>43</Label>
                  </li>
                  <li>
                    <input
                      id="44"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>44</Label>
                  </li>
                  <li>
                    <input
                      id="45"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>45</Label>
                  </li>
                  <li>
                    <input
                      id="46"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>46</Label>
                  </li>
                  <li>
                    <input
                      id="47"
                      name="size"
                      type="radio"
                      onChange={filterSize}
                    />
                    <Label>47</Label>
                  </li>
                </ul>
              </FilterTab>
              <FilterTab>
                <FilterName>Price</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input
                      id="1"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>Under $25</Label>
                  </li>
                  <li>
                    <input
                      id="2"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$25–$50</Label>
                  </li>
                  <li>
                    <input
                      id="3"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$50–$250</Label>
                  </li>
                  <li>
                    <input
                      id="4"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$250–$600</Label>
                  </li>
                  <li>
                    <input
                      id="5"
                      name="price"
                      type="radio"
                      onChange={filterPrice}
                    />
                    <Label>$600–$1,000</Label>
                  </li>
                </ul>
              </FilterTab>
            </ul>
          </Filters>
        </WrapLeft>
        <WrapRight className="columns medium-9 large-10">
          {products == null ? <></> : <OneProduct products={products} />}
        </WrapRight>
      </Wrap>
      {children}
    </>
  );
};

export default Products;
