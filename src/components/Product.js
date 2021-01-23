import React, { useState } from "react";
import Img from "gatsby-image";
import Slide from "react-reveal";
import styled from "styled-components";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2vw;
  grid-auto-rows: auto;
  padding: 2vw;
`;

const ProductItemsGrid = styled.div`
  width: 35rem;
  height: 70rem;
  display: grid;
  grid-template-rows: 35rem 35rem;
  grid-auto-columns: auto;
`;

function ProductItem({ product }) {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show)
  }

  return (
    <ProductItemsGrid>
      <button className="slideBtn" type="button" onClick={e => {handleClick(e)}}>
     <Img fluid={product.image.asset.fluid} alt={product.name} />
     </button>
     <Slide top when={show}>
   <div className="product">
          <h2 >
            <span>{product.name}</span>
          </h2>
          <h3>${product.price}</h3>
          <h4>{product.pdcode}</h4>
          <div className="desc">
            <p>{product.description1}</p>
            <p>{product.description2}</p>
          </div>
          
          <div className="btnDiv">
            <button className="atcBtn" type="button"><strong>Add To Cart</strong></button>
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
        <ProductItem key={product.svccode} product={product} />
      ))}
    </ProductsGrid>
  );
}
