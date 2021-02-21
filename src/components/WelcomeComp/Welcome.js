import React from "react";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import Logo from "../Logo";

const StyledWelcome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 4rem 0 0;
  background: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  h2 {
    font-size: 1.8rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
  }
  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    margin: 4rem auto 0;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    
  }
`;

const StyledWelcomeMessage = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
`;

const StyledCopy = styled.div`
  color: ${({ theme }) => theme.primaryHover};
  width: 100%;
  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: 1.8rem;
    padding: 1.5rem 0;
  }
  p {
  padding: 0 2.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.dblue};
  }
  li {
    font-size: 1.6rem;
    font-family: "futura-pt";
    text-transform: uppercase;
    padding-right: 2rem;
    padding-bottom: 0.4rem;
  }
`;

function CopyDetails({ copy }) {
  return (
    <StyledWelcome>
      <StyledWelcomeMessage>
        <Pulse forever={true}>
          <Logo />
        </Pulse>
        <>
          <p>{copy.para1}</p>
          <h2>{copy.heading1}</h2>
          <p>{copy.para2}</p>
          <ol>
            <li>{copy.heading2}</li>
            <li>{copy.heading3}</li>
            <li>{copy.heading4}</li>
          </ol>
          <p>{copy.para1}</p>
        </>
      </StyledWelcomeMessage>
    </StyledWelcome>
  );
}

export default function Welcome({ copies }) {
  return (
    <StyledCopy>
      {copies.map((copy) => (
        <CopyDetails key={copy.id} copy={copy} />
      ))}
    </StyledCopy>
  );
}
