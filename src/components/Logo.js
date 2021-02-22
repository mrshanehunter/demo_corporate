import React from 'react';
import styled from 'styled-components';
import logo from '../images/LogoMark.png';

const LogoStyles = styled.div`
  position: relative;
  z-index: 5;
  top: 0;
  left: 0;
  width: 15rem;
  height: 15rem;
  background-color: var(--silver);
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
  @media (min-width: 1440px) {
    width: 9vw;
    height: 9vw;
  }
`;

export default function Logo() {
  return <LogoStyles className="logo" />;
}