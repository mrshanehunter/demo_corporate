import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import Logo from "./Logo";

const StyledContainer = styled.div` 
  width: 30rem;
  margin: 4rem auto;
  background: ${({ theme })=> theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    margin-top: 0;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.dblue};
  }
  a {
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.silver};
    text-decoration: none;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    width: 20vw;
    padding: 1vw;
    h3 {
      font-size: 1.4vw;
    }
    a {
      font-size: 1vw;
    }
  }
`;



export default function PayReject(props) {

  const [fName, setFName] =useState("");

  useEffect(() => {
    setFName(sessionStorage.getItem("cName"))
  }, []);
  
 

  return (
    <StyledContainer>
         <Pulse forever={true}>
      <Logo className="css animated"/>
      </Pulse>
      
      <h3>Either you didn't complete the checkout or there was a problem with your payment {fName}</h3>
      
      <Link to="/home">Click Here To Continue Browsing</Link>
    </StyledContainer>
  );
}
