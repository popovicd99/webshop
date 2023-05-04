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
  }, [products]);
  return (
    <>
      <Wrap className="row expanded">
        <WrapLeft className="columns medium-3 large-2">
          <Filters>
            <ul
              className="vertical menu hide-for-small-only"
              data-accordion-menu
            >
              <FilterHeader className="hide-for-small-only">
                Filters
              </FilterHeader>
              <FilterTab>
                <FilterName>Category</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input id="category-checkbox1" type="checkbox" />
                    <Label htmlFor="category-checkbox1">Category 1</Label>
                  </li>
                  <li>
                    <input id="category-checkbox2" type="checkbox" />
                    <Label htmlFor="category-checkbox2">Category 2</Label>
                  </li>
                  <li>
                    <input id="category-checkbox3" type="checkbox" />
                    <Label htmlFor="category-checkbox3">Category 3</Label>
                  </li>
                  <li>
                    <input id="category-checkbox4" type="checkbox" />
                    <Label htmlFor="category-checkbox4">Category 4</Label>
                  </li>
                  <li>
                    <input id="category-checkbox5" type="checkbox" />
                    <Label htmlFor="category-checkbox5">Category 5</Label>
                  </li>
                </ul>
              </FilterTab>
              <FilterTab>
                <FilterName>Size</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input id="size-checkbox1" type="checkbox" />
                    <Label htmlFor="size-checkbox1">Small</Label>
                  </li>
                  <li>
                    <input id="size-checkbox2" type="checkbox" />
                    <Label htmlFor="size-checkbox2">Medium</Label>
                  </li>
                  <li>
                    <input id="size-checkbox3" type="checkbox" />
                    <Label htmlFor="size-checkbox3">Large</Label>
                  </li>
                  <li>
                    <input id="size-checkbox3" type="checkbox" />
                    <Label htmlFor="size-checkbox3">X-Large</Label>
                  </li>
                  <li>
                    <input id="size-checkbox3" type="checkbox" />
                    <Label htmlFor="size-checkbox3">XX-Large</Label>
                  </li>
                </ul>
              </FilterTab>
              <FilterTab>
                <FilterName>Price</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input id="price-checkbox1" type="checkbox" />
                    <Label htmlFor="price-checkbox1">Under $25</Label>
                  </li>
                  <li>
                    <input id="price-checkbox2" type="checkbox" />
                    <Label htmlFor="price-checkbox2">$25–$50</Label>
                  </li>
                  <li>
                    <input id="price-checkbox3" type="checkbox" />
                    <Label htmlFor="price-checkbox3">$50–$250</Label>
                  </li>
                  <li>
                    <input id="price-checkbox4" type="checkbox" />
                    <Label htmlFor="price-checkbox4">$250–$600</Label>
                  </li>
                  <li>
                    <input id="price-checkbox4" type="checkbox" />
                    <Label htmlFor="price-checkbox4">$600–$1,000</Label>
                  </li>
                </ul>
              </FilterTab>
            </ul>

            <ul
              className="vertical menu show-for-small-only"
              data-accordion-menu
            >
              <FilterHeader className="show-for-small-only">
                Filters
              </FilterHeader>
              <FilterTab>
                <FilterName>Category</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input id="category-checkbox1" type="checkbox" />
                    <Label htmlFor="category-checkbox1">Category 1</Label>
                  </li>
                  <li>
                    <input id="category-checkbox2" type="checkbox" />
                    <Label htmlFor="category-checkbox2">Category 2</Label>
                  </li>
                  <li>
                    <input id="category-checkbox3" type="checkbox" />
                    <Label htmlFor="category-checkbox3">Category 3</Label>
                  </li>
                  <li>
                    <input id="category-checkbox4" type="checkbox" />
                    <Label htmlFor="category-checkbox4">Category 4</Label>
                  </li>
                  <li>
                    <input id="category-checkbox5" type="checkbox" />
                    <Label htmlFor="category-checkbox5">Category 5</Label>
                  </li>
                </ul>
              </FilterTab>
              <FilterTab>
                <FilterName>Size</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input id="size-checkbox1" type="checkbox" />
                    <Label htmlFor="size-checkbox1">Small</Label>
                  </li>
                  <li>
                    <input id="size-checkbox2" type="checkbox" />
                    <Label htmlFor="size-checkbox2">Medium</Label>
                  </li>
                  <li>
                    <input id="size-checkbox3" type="checkbox" />
                    <Label htmlFor="size-checkbox3">Large</Label>
                  </li>
                  <li>
                    <input id="size-checkbox3" type="checkbox" />
                    <Label htmlFor="size-checkbox3">X-Large</Label>
                  </li>
                  <li>
                    <input id="size-checkbox3" type="checkbox" />
                    <Label htmlFor="size-checkbox3">XX-Large</Label>
                  </li>
                </ul>
              </FilterTab>
              <FilterTab>
                <FilterName>Price</FilterName>
                <ul className="menu vertical nested">
                  <li>
                    <input id="price-checkbox1" type="checkbox" />
                    <Label htmlFor="price-checkbox1">Under $25</Label>
                  </li>
                  <li>
                    <input id="price-checkbox2" type="checkbox" />
                    <Label htmlFor="price-checkbox2">$25–$50</Label>
                  </li>
                  <li>
                    <input id="price-checkbox3" type="checkbox" />
                    <Label htmlFor="price-checkbox3">$50–$250</Label>
                  </li>
                  <li>
                    <input id="price-checkbox4" type="checkbox" />
                    <Label htmlFor="price-checkbox4">$250–$600</Label>
                  </li>
                  <li>
                    <input id="price-checkbox4" type="checkbox" />
                    <Label htmlFor="price-checkbox4">$600–$1,000</Label>
                  </li>
                </ul>
              </FilterTab>
            </ul>
          </Filters>
        </WrapLeft>
        <WrapRight className="columns medium-9 large-10">
          <div className="row small-up-2 medium-up-3 large-up-4">
            {products == null ? (
              <></>
            ) : (
              products.map((product) => {
                return <OneProduct product={product} key={product.id} />;
              })
            )}
          </div>
        </WrapRight>
      </Wrap>
      {children}
    </>
  );
};

export default Products;
