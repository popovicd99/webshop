import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

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
const ProductPictures = styled.img`
  display: inline-block;
  height: 25px;
  width: 25px;
  margin-right: 5px;
`;
const OneProduct = ({ products }) => {
  const [currentItems, setcurrentItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setcurrentItems(products.slice(itemOffset, endOffset));
    setpageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="row small-up-2 medium-up-3 large-up-4">
        {currentItems.map((product) => {
          return (
            <>
              <ProductBlock className="column column-block" key={product.id}>
                <ProductContainer>
                  <ProductThumbnail>
                    <Link to={"/product/" + product.name}>
                      <img
                        src={
                          product.pictures[0] != null
                            ? "/products/" + product.pictures[0].file_path
                            : "https://placehold.it/30x30"
                        }
                      />
                    </Link>
                  </ProductThumbnail>
                  <ProductTitle>
                    <Link to={"/product/" + product.name}>{product.name}</Link>
                  </ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>${product.price}</ProductPrice>
                  <ProductPicturesContainer>
                    <Link to={"/product/" + product.name}>
                      <ProductPictures
                        src={
                          product.pictures[1] != null
                            ? "/products/" + product.pictures[1].file_path
                            : "https://placehold.it/30x30"
                        }
                      />
                    </Link>

                    <Link to={"/product/" + product.name}>
                      <ProductPictures
                        src={
                          product.pictures[2] != null
                            ? "/products/" + product.pictures[2].file_path
                            : "https://placehold.it/30x30"
                        }
                      />
                    </Link>
                    <Link to={"/product/" + product.name}>
                      <ProductPictures
                        src={
                          product.pictures[3] != null
                            ? "/products/" + product.pictures[3].file_path
                            : "https://placehold.it/30x30"
                        }
                      />
                    </Link>
                    <Link to={"/product/" + product.name}>
                      <ProductPictures
                        src={
                          product.pictures[4] != null
                            ? "/products/" + product.pictures[4].file_path
                            : "https://placehold.it/30x30"
                        }
                      />
                    </Link>
                  </ProductPicturesContainer>
                </ProductContainer>
              </ProductBlock>
            </>
          );
        })}
      </div>
      <div className="row expanded">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination text-center"
          activeClassName="current"
        />
      </div>
    </>
  );
};

export default OneProduct;
