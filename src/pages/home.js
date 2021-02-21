import React from "react";
import { graphql } from "gatsby";
import Rates from "../components/Rates/Rates1";
import News from "../components/MarketNews/News";
import Welcome from "../components/WelcomeComp/Welcome";
import styled from "styled-components";
import HomeCarousel from "../components/HomeCarousel";
import SEO from "../components/SEOComponent";

const ContainingDiv = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  margin: 5rem auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr auto;
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
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  justify-items: center;
  width: 80%;
  margin: 2vw auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2vw;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
  
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
