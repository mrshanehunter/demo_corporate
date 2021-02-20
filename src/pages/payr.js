import React from "react";
import styled from "styled-components";
import PayReject from "../components/PayReject";

const ContainingDiv = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

export default function payrPage() {
  return (
    <ContainingDiv>
      <PayReject />
    </ContainingDiv>
  );
}
