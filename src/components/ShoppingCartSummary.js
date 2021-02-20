import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";


const StyledShoppingCartSummaryZero = styled.div`
  width: 30%;
  height: 2.8rem;
`;

const StyledShoppingCartSummary = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-top: 4rem;
  margin-right: 1rem;
  padding: 1rem;
  font-size: 1.8rem;
  background: ${({ theme }) => theme.primaryHover};
  border-radius: 1rem;
  border: thin solid ${({ theme}) => theme.silver};
  box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
  width: 30rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.dblue};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin-top: 10rem;
    align-self: center;
  }
`;

export default function ShoppingCartSummary() {
  const contxt = useContext(CartContext);

  if (contxt.cart.length === 0) {
    return <StyledShoppingCartSummaryZero></StyledShoppingCartSummaryZero>;
  } else if (contxt.cart.length === 1) {
    return (
      <StyledShoppingCartSummary>
        <Link to="/cart"> View the {contxt.cart.length} item in your cart</Link>
      </StyledShoppingCartSummary>
    );
  } else
    return (
      <StyledShoppingCartSummary>
        <Link to="/cart"> View the {contxt.cart.length} items in your cart</Link>
      </StyledShoppingCartSummary>
    );
}
