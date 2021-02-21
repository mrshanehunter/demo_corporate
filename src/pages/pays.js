import React from "react";
import styled from "styled-components";
import PaySuccess from "../components/PaySuccess";
import SEO from "../components/SEOComponent";


const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

export default function paysPage(props) {


  return (
    <>
    <SEO title="Payment Processed" />
    <ContainingDiv>
      <PaySuccess props={props} />
    </ContainingDiv>
    </>
  );
}

