import React from "react";
import Layout from "./src/components/Layout";
import { CartProvider } from './src/contexts/CartContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <CartProvider>{element}</CartProvider>;
}