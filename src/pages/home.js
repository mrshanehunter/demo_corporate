import React from "react";
import Rates from "../components/Rates/Rates1";
import News from "../components/MarketNews/News";
import Welcome from "../components/WelcomeComp/Welcome";
import styled from "styled-components";

const ContainingDiv = styled.div` 
  width: 90%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr;
  margin: 5rem auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr auto 1fr;
    gap: 1.5vw;
  }
  
`;


export default function homePage() {
  return (
    <ContainingDiv>
      <Welcome />
      <Rates />
      <News />
    </ContainingDiv>
  );
}
