import React, { useContext, useEffect, useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import CartContext from "../contexts/CartContext"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY) 

const CartGrid = styled.div` 
  display: grid;
  grid-template-rows: subgrid(CartItemsGrid) 30rem;
  grid-auto-columns: auto;
  margin-top: 12rem;
  gap: 2rem;
  align-content: center;
  justify-content: center;
  
`;

const CartItemsGrid = styled.div` 
  display: grid;
  grid-template-rows: 25rem 2rem 2rem;
  grid-auto-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  @media (min-width: 768px) {
    gap: 3rem;
  }
  
`;







export default function ShoppingCart({ products }) {
const cntxt = useContext(CartContext);
const [loading, setLoading] = useState(false);
const cart = cntxt.cart;
const setCart = cntxt.setCart;
const cartTotal = cntxt.cartTotal;
const setCartTotal = cntxt.setCartTotal;
const sessId = cntxt.sessId;
const setSessId = cntxt.sessId;


const removeFromCart = (product) => {
  let copy = [...cart];
  copy = copy.filter((cartItem) => cartItem.pricecode !== product.pricecode);
  setCart(copy);
}

const cartItems = cart.map((product) => (
  
  <CartItemsGrid key={product.pricecode}>
  <Img fluid={product.image.asset.fluid} alt={product.name} className="checkOutImg" style={{maxWidth: `300px`, maxHeight: `300px`, borderRadius: `5px`, border: `0.05rem solid #1978a5`}}/>
  <div className="cartProduct"> {`${product.name}: $${product.price}`}</div>
    <input className="remove" disabled={loading} type="submit" value="Remove" onClick={() => removeFromCart(product)} />
  </CartItemsGrid>
 
 
))


const total = () => {
  let totalVal = 0;
  for (let i = 0; i < cart.length; i++) {
    totalVal += cart[i].price;
  }
  setCartTotal(totalVal);
}

useEffect(() => {
  total();
},[]);

 
 


  function cartSession(lineItems) {
  console.log(lineItems);
  fetch("http://localhost:8888/.netlify/functions/orderCreate", {
    method: "POST",
    body: JSON.stringify(lineItems),
  })
  .then(async response => {
    const { id } = await response.json();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    setSessId(id)
    console.log("Response", error.message)
  })
  .catch(err => console.log("catch", err.message))
  setLoading(!loading)
}

function checkOut(cartItems) {
  console.log(cartItems)
  setLoading(loading);
  const lineItems = cartItems.map((cartItem) => (
    {
      price: `${cartItem.key}`,
      quantity: 1,
    }
  ))    
   cartSession(lineItems); 
  }


return (
  <>
<CartGrid>
  {cartItems}
  <div className="cartTtl">Total: ${cartTotal}</div>
  <div className="cartGST">includes GST of ${(cartTotal - (cartTotal / 1.1)).toFixed(2)}</div>
</CartGrid>  

  
<button className="checkOut" disabled={loading} type="submit" onClick={() => checkOut(cartItems)}>Checkout</button>
 </>
)

} 