import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Product from "../components/Product";
import ShoppingCartSummary from "../components/ShoppingCartSummary";
import SEO from "../components/SEOComponent";

const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 375px) {
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  
`;


export default function shopPage({ data }) {
  const products = data.products.nodes;
  
  return (
    <>
    <SEO title="SAS Shop" />
    <ContainingDiv>
          <ShoppingCartSummary style={{fontSize: `3rem`, width: `100%`}} />
          <Product products={products}/>
      </ContainingDiv>
    </>  
  );
}

export const query = graphql` 
  query productsQuery {
    products: allSanityProducts {
      nodes {
        id
        name
        pdcode
        price
        pricecode
        description1
        description2
        image {
          asset {
            fluid(maxWidth: 900) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;  
