import React from "react";
import { graphql } from "gatsby";
import Rates from "../components/Rates/Rates1";
import News from "../components/MarketNews/News";
import Welcome from "../components/WelcomeComp/Welcome";
import styled from "styled-components";
import HomeCarousel from "../components/HomeCarousel";
import SEO from "../components/SEOComponent";

const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  
  
  @media (min-width: 768px) {
    width: 90%;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 4rem;
    grid-template-columns: 1fr;
    margin: 14rem auto 2rem;
  }
  @media (min-width: 1024px) {
    margin-top: 10rem;
    grid-template-rows: auto 1fr;
    gap: 2vw;
    justify-content: stretch;
  }
`;

const SubGridDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
 

 

  @media (min-width: 1024px) {
   display: flex; 
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   align-content: flex-start;
  
  }
`;

export default function homePage(props) {
  const copies = props.data.boilerplates.nodes;
  return (
    <>
    <SEO title="Home" />
    <ContainingDiv>
      <HomeCarousel props={props} />
      <SubGridDiv>
        <Welcome copies={copies} />
        <Rates />
        <News />
      </SubGridDiv>
    </ContainingDiv>
    </>
  );
}

export const query = graphql`
  query boilerplatesQuery {
    boilerplates: allSanityBoilerplates {
      nodes {
        id
        heading1
        heading2
        heading3
        heading4
        para1
        para2
        para3
        para4
      }
    }
  }
`;
