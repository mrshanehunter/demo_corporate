import React, { useContext } from "react"
import CartContext from "../contexts/CartContext"

export default function ShoppingCart() {
useContext(CartContext);

return (
  
  <CartContext.Consumer>
    {context => (
    <p>There are {context.length} items in your cart</p>
    )}
    </CartContext.Consumer>
)

}