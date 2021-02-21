import React, { useState, useContext } from "react";
import Img from "gatsby-image";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
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
    
  }
`;

const ProductItemsGrid = styled.div`
  width: 35rem;
  height: 35rem;
  display: grid;
  grid-template-columns: 35rem;
  grid-auto-rows: 35rem;
  h2 {
    text-transform: uppercase;
  }
`;

function ProductItem({ product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  const cntxt = useContext(CartContext);

  const addToCart = (product) => {
    cntxt.setCart([...cntxt.cart, product]);
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <ProductItemsGrid>
        <button
          className="flipTo"
          type="button"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <Img fluid={product.image.asset.fluid} alt={product.name} />
        </button>
      </ProductItemsGrid>
      <ProductItemsGrid>
        <div className="product">
        <button
                type="button"
                className="flipBack"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                &times;
              </button>
          <h2>
            <span>
              {product.name}
              
            </span>
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
      </ProductItemsGrid>
    </ReactCardFlip>
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
