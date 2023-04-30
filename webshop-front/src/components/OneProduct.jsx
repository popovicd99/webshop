import React from "react";
import styled from "styled-components";

const ProductBlock = styled.div`
  padding: 1rem;
`;
const ProductContainer = styled.div`
  background-color: #fefefe;
  border: 1px solid #e6e6e6;
  padding: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 30px;
`;
const ProductThumbnail = styled.div`
  display: block;
  position: relative;
`;
const ProductTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45rem;
  margin-top: 1rem;
  margin-bottom: 0;
`;
const ProductDesc = styled.span`
  color: #8a8a8a;
  display: block;
  font-size: 0.85rem;
`;
const ProductPrice = styled.span`
  color: #3e3e3e;
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.8rem;
`;

const ProductPicturesContainer = styled.div`
  display: block;
  margin-top: 0.8rem;
`;
const ProductPictures = styled.a`
  display: inline-block;
  height: 25px;
  width: 25px;
  margin-right: 5px;
`;
const OneProduct = ({ product }) => {
  return (
    <>
      <ProductBlock className="column column-block">
        <ProductContainer>
          <ProductThumbnail>
            <a href="#">
              <img
                src={
                  product.pictures[0] != null
                    ? "/products/" + product.pictures[0].file_path
                    : "https://placehold.it/30x30"
                }
              />
            </a>
          </ProductThumbnail>
          <ProductTitle>
            <a href="#">{product.name}</a>
          </ProductTitle>
          <ProductDesc>{product.desc}</ProductDesc>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductPicturesContainer>
            <ProductPictures href="#">
              <img
                src={
                  product.pictures[1] != null
                    ? "/products/" + product.pictures[1].file_path
                    : "https://placehold.it/30x30"
                }
              />
            </ProductPictures>
            <ProductPictures href="#">
              <img
                src={
                  product.pictures[2] != null
                    ? "/products/" + product.pictures[2].file_path
                    : "https://placehold.it/30x30"
                }
              />
            </ProductPictures>
            <ProductPictures href="#">
              <img
                src={
                  product.pictures[3] != null
                    ? "/products/" + product.pictures[3].file_path
                    : "https://placehold.it/30x30"
                }
              />
            </ProductPictures>
            <ProductPictures href="#">
              <img
                src={
                  product.pictures[4] != null
                    ? "/products/" + product.pictures[4].file_path
                    : "https://placehold.it/30x30"
                }
              />
            </ProductPictures>
          </ProductPicturesContainer>
        </ProductContainer>
      </ProductBlock>
    </>
  );
};

export default OneProduct;
