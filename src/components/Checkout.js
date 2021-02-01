import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY)

export default function Checkout() {
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(false);
  
  console.log("Checkout")
  }
/*  let orderItem = [];
    for (let i = 0; i < cartItems.length; i++) {
      orderItem = [ { price: `${cartItems.key[i]}`, quantity: 1 }, ];
    }
  fetch("./netlify/functions/OrderCreate", {
    method: "POST",
    body: JSON.stringify(orderItem),
  })
  .then(async response => {
    const { id } = await response.json()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({ session: id })
    alert(error.message)
  })
  .catch(err => alert(err.message))
  setLoading(!loading)*/


 

