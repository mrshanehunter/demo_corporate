import React, { useState } from "react";

const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState([])
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")

 

  const value = {
    cart,
    setCart, 
    cartTotal,
    setCartTotal,
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
