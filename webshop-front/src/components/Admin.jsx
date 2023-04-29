import React from "react";
import styled from "styled-components";

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
const TableBodyText = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0.5rem;
  color: black;
`;
const TableImage = styled.img`
  max-width: none;
`;
const Button = styled.div`
  width: 100px;
  margin-top: 10px;
`;
const Admin = () => {
  return (
    <>
      <HeroWrap>
        <HeroContent>
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
              <tr>
                <td>
                  <TableImage src="https://placehold.it/100x100" />
                </td>
                <td>
                  <TableBodyText>Another person did something</TableBodyText>
                </td>
                <td>
                  <TableBodyText>Another person did something</TableBodyText>
                </td>
                <td>
                  <TableBodyText>Another person did something</TableBodyText>
                </td>
                <td>
                  <Button className="button warning">Edit Sizes</Button>
                  <Button className="button alert">Remove</Button>
                </td>
              </tr>
            </TableBody>
          </Table>
        </HeroContent>
      </HeroWrap>
    </>
  );
};

export default Admin;