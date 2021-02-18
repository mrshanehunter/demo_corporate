import React from "react";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import Logo from "./Logo";

const StyledContactIntro = styled.div`
  width: 30rem;
  background: ${({ theme }) => theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 0 auto;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.dblue};
  }
  p {
    margin: 1rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.silver};
  }
  
`;

export default function ContactIntro() {
  return (
    <StyledContactIntro>
      <Pulse forever={true}>
      <Logo />
      </Pulse>
      
      <h3>We're Here To Help</h3>
      <p>You can either fill in the form and we'll contact you, or use our contact details to get in touch.</p>
    </StyledContactIntro>
  );
}
