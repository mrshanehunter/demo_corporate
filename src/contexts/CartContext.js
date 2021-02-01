import React, { useState } from "react";

const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState([])
  const [sessId, setSessId] = useState("")
 

  const value = {
    cart,
    setCart, 
    cartTotal,
    setCartTotal,
    sessId,
    setSessId,
    
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
