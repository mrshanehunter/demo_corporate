import React from "react";
import Rates from "../components/Rates";
// import Shares from "../components/Shares";
import styled from "styled-components";

const ContainingDiv = styled.div` 
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;


export default function homePage() {
  return (
    <ContainingDiv>
      <Rates />
      
    </ContainingDiv>
  );
}
