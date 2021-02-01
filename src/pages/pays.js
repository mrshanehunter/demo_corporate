import React from "react";
import styled from "styled-components";
import PaySuccess from "../components/PaySuccess";


const ContainingDiv = styled.div`
  width: 60%;
  height: 80%;
  margin: 5% auto;
`;

export default function paysPage(props) {
 

  return (
    <ContainingDiv>
      <PaySuccess />
    </ContainingDiv>
  );
}

