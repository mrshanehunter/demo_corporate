import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import Product from "../components/Product";
import ShoppingCart from "../components/ShoppingCart";

const ContainingDiv = styled.div`
  width: 75%;
  height: 90%;
  margin: 5% auto;
`;

export default function shopPage({ data }) {
  const products = data.products.nodes;
  
  return (
    <Layout>
      <ContainingDiv>
          <ShoppingCart style={{fontSize: `3rem`, width: `100%`}} />
          <Product products={products}/>
      </ContainingDiv>
    </Layout>
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
            fixed(width: 300, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;  
