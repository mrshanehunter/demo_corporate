import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components"
import Director from "../components/Director"

const ContainingDiv = styled.div`
width: 60%;
height: 80%;
margin: 0 auto;
@media (max-width: 375px) {
  width: 85%;
  margin: 0 auto;
}
@media (max-width: 768px) {
  width: 100%;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
}
`;


export default function aboutPage({ data }) {
const directors = data.directors.nodes;

return (

   
      <ContainingDiv>
        <Director directors={directors} />
      </ContainingDiv>
   

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
