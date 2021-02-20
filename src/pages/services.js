import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Service from "../components/Service"

const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
`;

export default function servicesPage({ data }) {
  const services = data.services.nodes;
  
  return (
   
      <ContainingDiv>
         <Service services={services}/>
      </ContainingDiv>
    
  );
}

export const query = graphql` 
  query servicesQuery {
    services: allSanityServices {
      nodes {
        name
        description1
        description2
        svccode
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
