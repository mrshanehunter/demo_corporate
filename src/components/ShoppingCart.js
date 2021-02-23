import React, { useContext, useEffect, useState, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import NProgress from "react-nprogress";
import "nprogress/nprogress.css";
import CartContext from "../contexts/CartContext"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY) 

const CartContainer = styled.div`
  width: 32rem;
  margin: 4rem auto;
  background: ${({ theme })=> theme.dblue};
  border: thin solid ${({ theme }) => theme.silver};
  border-radius: 1rem;
  @media (min-width: 1440px) {
    width: 20vw;
  }
`;

const CartGrid = styled.div` 
  display: grid;
  grid-template-rows: subgrid(CartItemsGrid) 30rem;
  grid-auto-columns: auto;
  margin-top: 1rem;
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
  @media (min-width: 1440px) {
    display: grid;
    grid-template-rows: 15vw 1fr 1fr;
    grid-auto-columns: 18vw;
  }
`;

const CartContactGrid = styled.div`
  display: grid;
  grid-template-columns: 28rem;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem;
  input {
    border-radius: 0.25rem;
    font-size: 1.8rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 18vw;
    gap: 1vw;
    margin-bottom: 1vw;
    input {
      border-radius: 0.1vw;
      font-size: 1.2vw;
    }
  }
`;

export default function ShoppingCart({ products }) {
const cntxt = useContext(CartContext);
const [loading, setLoading] = useState(false);
const cart = cntxt.cart;
const setCart = cntxt.setCart;
const cartTotal = cntxt.cartTotal;
const setCartTotal = cntxt.setCartTotal;
const nameRef = useRef("");
const surnameRef = useRef("");
const emailRef = useRef("");



const removeFromCart = (product) => {
  let copy = [...cart];
  copy = copy.filter((cartItem) => cartItem.pricecode !== product.pricecode);
  setCart(copy);
}

const cartItems = cart.map((product) => (
  
  <CartItemsGrid key={product.pricecode} purchase={product.name}>
  <Img fluid={product.image.asset.fluid} alt={product.name} className="checkOutImg" />
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
});

  function cartSession(lineItems) {
  fetch(`${process.env.GATSBY_SERVERLESS_BASE}/orderCreate`, {
    method: "POST",
    body: JSON.stringify(lineItems),
  })
  .then(async response => {
    const { id } = await response.json();
    sessionStorage.setItem("id", id);
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    console.log("Response", error.message)
  })
  .catch(err => console.log("catch", err.message))
  setLoading(!loading)
  NProgress.done();
}

function checkOut(e) {
  e.preventDefault();
  NProgress.start();
  setLoading(loading);
  const cName = nameRef.current.value;
  const cSurname = surnameRef.current.value;
  const cEmail = emailRef.current.value;
  sessionStorage.setItem("cSurname", cSurname);
  sessionStorage.setItem("cName", cName);
  sessionStorage.setItem("cEmail", cEmail);
  const lineItems = cartItems.map((cartItem) => (
    {
      price: `${cartItem.key}`,
      quantity: 1,
    }
  ))  
  JSON.stringify(lineItems);  
  sessionStorage.setItem("Items", lineItems); 
    cartSession(lineItems); 
  }


return (
  <CartContainer>
<CartGrid>
  {cartItems}
  <h3 className="cartTtl">Total: ${cartTotal}</h3>
  <h4 className="cartGST">includes GST of ${(cartTotal - (cartTotal / 1.1)).toFixed(2)}</h4>
</CartGrid>  
<CartContactGrid>
    <div style={{display: `flex`, flexDirection: `row`}}>
    <input type="text" name="Fname"ref={nameRef} placeholder="Your First Name" required style={{width: `50%`}} />
    <input type="text" name="Lname" ref={surnameRef} placeholder="Your Last Name" required style={{width: `50%`}}/>
    </div>
    <input type="email" name="email" ref={emailRef} placeholder="Your Email Address" required />
    </CartContactGrid>
<button className="checkOut" disabled={loading} type="submit" onClick={(e) => checkOut(e)}>Checkout</button>
 </CartContainer>
)

} 