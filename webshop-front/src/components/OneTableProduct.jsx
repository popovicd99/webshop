import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const TableBodyText = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0.5rem;
  color: black;
`;
const TableImage = styled.img`
  width: 100px;
  height: 100px;
  max-width: none;
`;
const Button = styled.div`
  width: 100px;
  margin-top: 10px;
`;

const OneTableProduct = ({ loadSizes, remove, products }) => {
  const [currentItems, setcurrentItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

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
      {currentItems.map((product) => {
        return (
          <tr key={product.id}>
            <td>
              <TableImage src={"/products/" + product.pictures[0].file_path} />
            </td>
            <td>
              <TableBodyText>{product.name}</TableBodyText>
            </td>
            <td>
              <TableBodyText>{product.desc}</TableBodyText>
            </td>
            <td>
              <TableBodyText>{product.price}</TableBodyText>
            </td>
            <td>
              <Button
                className="button warning"
                onClick={(e) => loadSizes(e, product.id)}
              >
                Edit Sizes
              </Button>
              <Button
                className="button alert"
                onClick={(e) => remove(e, product.id)}
              >
                Remove
              </Button>
            </td>
          </tr>
        );
      })}
      <tr>
        <td colSpan="5">
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
        </td>
      </tr>
    </>
  );
};

export default OneTableProduct;
