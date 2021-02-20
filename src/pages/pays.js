import React from "react";
import styled from "styled-components";
import PaySuccess from "../components/PaySuccess";


const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

export default function paysPage(props) {


  return (
    <ContainingDiv>
      <PaySuccess props={props} />
    </ContainingDiv>
  );
}

