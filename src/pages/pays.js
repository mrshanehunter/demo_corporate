import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PaySuccess from "../components/PaySuccess";
import SEO from "../components/SEOComponent";


const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

export default function paysPage({ data }) {
const refData = data.refdata.nodes;
console.log(refData)
  return (
    <>
    <SEO title="Payment Processed" />
    <ContainingDiv>
      <PaySuccess refData={refData} />
    </ContainingDiv>
    </>
  );
}

export const query = graphql` 
  query productsNameQuery {
    refdata: allSanityProducts {
      nodes {
        id
        name
        pricecode
      }
    }
  }
`;  