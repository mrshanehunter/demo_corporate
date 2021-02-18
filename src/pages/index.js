import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import Logo from '../components/Logo';

const LandingStyle = styled.div`
  background-color: #1978a5;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  .logo {
    position: relative;
    height: 250px;
    width: 250px;
    margin-top: 25rem;
  }
`;
   

export default function indexPage(){
  return(
    <>
    <LandingStyle>
      <Link to="/home">
        <Pulse forever={true}>
       <Logo className="css animated" />
       </Pulse>
       </Link>
      </LandingStyle>
    </>
  )
}
