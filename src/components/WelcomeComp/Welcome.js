import React from "react";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import Logo from "../Logo";

const StyledWelcome = styled.div`
  width: 30rem;
  margin-top: 4rem;
  background: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
 
 
 
 
  @media (min-width: 768px) {
   width: 90%;
   margin: 0 auto 2rem; 
  }
  @media (min-width: 1024px) {
   width: 55%;
   max-height: 850px;
   margin: 0;
   
    
  }
`;

const StyledWelcomeMessage = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCopy = styled.div`
  color: ${({ theme }) => theme.primaryHover};
  
  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: 1.8rem;
    padding: 1rem 0;
    text-align: center;
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
    flex: 1;
  }
`;

function CopyDetails({ copy }) {
  return (
    
      <StyledWelcomeMessage>
        <Pulse forever={true}>
          <Logo />
        </Pulse>
        <StyledCopy>
          <p>{copy.para1}</p>
          <h2>{copy.heading1}</h2>
          <p>{copy.para2}</p>
          <ol>
            <li>{copy.heading2}</li>
            <li>{copy.heading3}</li>
            <li>{copy.heading4}</li>
          </ol>
          <p>{copy.para1}</p>
          </StyledCopy>
      </StyledWelcomeMessage>
    
  );
}

export default function Welcome({ copies }) {
  return (
    <StyledWelcome>
      {copies.map((copy) => (
        <CopyDetails key={copy.id} copy={copy} />
      ))}
    </StyledWelcome>
  );
}
