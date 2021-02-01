import React, { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/CartContext";
import { loadStripe } from "@stripe/stripe-js";




export default function PaySuccess() {
  const cntxt = useContext(CartContext);
  const sessId = cntxt.sessId;
  
  const [resData, setResData] = useState({});

  console.log(sessId);
  
  
  // useEffect(() => {
   
  //  fetch("http://localhost:8888/.netlify/functions/orderConfirm", {
  //    method: "GET",
  //  })   
  //   .then(response => response.json())
  //   .then(data => setResData(data))
 
  // })
  
  
  
  return (
    <div>
     <div>PaySuccessComponent</div>
     {/* <div>{resData.object}</div> */}
    </div>
  );
  }

