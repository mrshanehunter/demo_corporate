import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";


const StyledShoppingCartSummary = styled.div` 
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 1.6rem;
  height: 2rem;
  @media (max-width: 375px) {
    margin-top: 10rem;
  }
`;

export default function ShoppingCartSummary() {
  const contxt = useContext(CartContext);
 
  
  if(contxt.cart.length === 0) {
    return <StyledShoppingCartSummary> </StyledShoppingCartSummary>
  } else if(contxt.cart.length === 1) {
    return <StyledShoppingCartSummary> There is {contxt.cart.length} item in your cart. <Link to="/cart"><button type="button" > Cart Icon Click to View</button></Link></StyledShoppingCartSummary>
  } else return <StyledShoppingCartSummary> There are {contxt.cart.length} items in your cart. <Link to="/cart"><button type="button" > Cart Icon Click to View</button></Link></StyledShoppingCartSummary>
  



  
}
