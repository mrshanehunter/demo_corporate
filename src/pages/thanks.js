import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import Logo from "../components/Logo";
import SEO from "../components/SEOComponent";

const StyledContainer = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTile = styled.div`
  width: 30rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  color: ${({ theme }) => theme.dblue};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 1rem;
  border-radius: 1rem;
  h3 {
    font-size: 2rem;
    text-align: center;
    margin: 0.5rem 2rem 1rem;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
    margin: 1rem;
    color: ${({ theme }) => theme.silver};
  }
`;

const ThanksPage = () => {

 
  return (
    <>
    <SEO title="Contact Form Received" />
    <StyledContainer>
      <StyledTile>
        <Pulse forever={true}>
          <Logo />
        </Pulse>
        <h3>Your form has been submitted successfully</h3>
        <h3>Someone will contact you in the next 24 hours.</h3>
        <Link to="/home">Click here to continue browsing</Link>
        </StyledTile>
      </StyledContainer>
    </>
  )
}

export default ThanksPage;
