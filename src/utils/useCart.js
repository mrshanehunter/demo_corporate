import { useState, useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function useCart({ products, values }) {
  const [cart, setCart] = useContext(CartContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    setCart([
      ...cart.slice(0, index),
      ...cart.slice(index + 1),
    ]);
  }
  return {
    cart,
    addToCart,
    removeFromCart,
    error,
    loading,
    message,
  };
}