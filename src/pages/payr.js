import React from "react";
import styled from "styled-components";
import PayReject from "../components/PayReject";
import SEO from "../components/SEOComponent";

const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

export default function payrPage() {
  return (
    <>
    <SEO title="No Payment Processed" />
    <ContainingDiv>
      <PayReject />
    </ContainingDiv>
    </>
  );
}
