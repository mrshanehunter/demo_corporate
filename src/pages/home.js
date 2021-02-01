import React from "react";
import Rates from "../components/Rates/Rates1";
import News from "../components/MarketNews/News";
import styled from "styled-components";

const ContainingDiv = styled.div` 
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  
`;


export default function homePage() {
  return (
    <ContainingDiv>
      <Rates />
      <News />
    </ContainingDiv>
  );
}
