import React, { useState, useContext } from "react";
import Img from "gatsby-image";
import Slide from "react-reveal";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";

/* Slide is causing screen shift on siblings when activated */

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  gap: 8vw;
  padding: 4vw;
  margin: 10rem 0;
  align-items: center;
  justify-items: center;
  @media (min-width: 768px) {
    margin-top: 10rem;
    gap: 4vw;
    padding: 4vw;
  }
  @media (min-width: 1024px) {
    margin-top: 2rem;
    gap: 6vw;
    padding: 6vw;
  }
`;

const ProductItemsGrid = styled.div`
  width: 35rem;
  display: grid;
  grid-template-columns: 1fr;
  h2 {
    text-transform: uppercase;
  }
`;

function ProductItem({ product }) {
  const [show, setShow] = useState(false);
  
  const handleClick = (e) => {
    setShow(!show);
  };

  const cntxt = useContext(CartContext);

  const addToCart = (product) => {
    cntxt.setCart([...cntxt.cart, product]);
    setShow(!show);
  };

  return (
    <ProductItemsGrid>
      <button
        className="slideBtn"
        type="button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <Img fluid={product.image.asset.fluid} alt={product.name} />
      </button>
      <Slide top collapse when={show}>
        <div className="product">
          <h2>
            <span>{product.name}</span>
          </h2>
          <h3>${product.price}</h3>
          <h4>{product.pdcode}</h4>
          <div className="desc">
            <p>{product.description1}</p>
            <p>{product.description2}</p>
          </div>

          <div className="btnDiv">
            <button
              className="atcBtn"
              type="submit"
              onClick={() => addToCart(product)}
            >
              <strong>Add To Cart</strong>
            </button>
          </div>
        </div>
      </Slide>
    </ProductItemsGrid>
  );
}





export default function Product({ products }) {
  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsGrid>
  );
}
