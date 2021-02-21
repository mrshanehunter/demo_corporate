import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components"
import Director from "../components/Director"
import SEO from "../components/SEOComponent";

const ContainingDiv = styled.div`
width: 60%;
margin: 10rem auto;
@media (min-width: 768px) {
  width: 90%;
  margin: 12.5rem auto;
}
@media (min-width: 1024px) {
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
`;


export default function aboutPage({ data }) {
const directors = data.directors.nodes;

return (
  <>  
    <SEO title="About" />  
      <ContainingDiv>
        <Director directors={directors} />
      </ContainingDiv>
  </> 

);
}

export const query = graphql` 
query directorsQuery {
  directors: allSanityDirectors {
    nodes {
      id
      name
      description1
      description2
      description3
      dirqual
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
