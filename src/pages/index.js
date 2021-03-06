import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import Logo from '../components/Logo';
import SEO from "../components/SEOComponent";

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
    height: 25rem;
    width: 25rem;
    margin-top: 25%;
  }
`;
   

export default function indexPage(){
  return(
    <>
    <SEO title="Index" />
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
