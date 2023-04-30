import React from "react";
import styled from "styled-components";

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

const OneTableProduct = ({ product }) => {
  return (
    <>
      <tr>
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
          <Button className="button warning">Edit Sizes</Button>
          <Button className="button alert">Remove</Button>
        </td>
      </tr>
    </>
  );
};

export default OneTableProduct;
