import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from './Logo';

const NavStyles = styled.nav`
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-rows: auto 1fr 1fr 1fr 1fr;
    background: var(--silver);
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
    width: 12vw;
    align-items: center;
    li {
      padding: 10px 0;
      text-align: center;
    }    
    
    a {
      color: var(--dblue);
      text-decoration:  none;
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export default function Nav() {
  return(
    <NavStyles>
      <ul>
        <li>
          <Logo to="/home">Home</Logo>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </NavStyles>

  )
}

