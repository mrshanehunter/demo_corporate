import React from "react";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import WelcomeProfile from "./WelcomeProfile";
import WelcomeService from "./WelcomeService";
import WelcomeProduct from "./WelcomeProduct";
import Logo from "../Logo";

const StyledWelcome = styled.div`
  display: grid;
  grid-template-columns: 300px;
  /* width: 50rem; */
  /* height: 40rem; */
  margin: 4rem auto;
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
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const StyledWelcomeMessage = styled.div`
  width: 97.5%;
  margin: 0 auto 2rem;
  background: ${({ theme }) => theme.silver};
  color: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
`;

const StyledHeader1 = styled.h1`
  color: ${({ theme }) => theme.dblue};
  margin-bottom: 0;
  margin-top: 0;
`;

const StyledHeader2 = styled.h2`
  color: ${({ theme }) => theme.dblue};
  margin-bottom: 0;
  margin-top: 1rem;
`;

const StyledHeader3 = styled.h3`
  color: ${({ theme }) => theme.dblue};
  margin-bottom: 0;
  margin-top: 1rem;
  font-size: 1.6rem;
`;

const StyledList = styled.ol`
  color: ${({ theme }) => theme.dblue};
  margin-bottom: 1rem;
  margin-top: 1rem;
  li {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }
`;

export default function Welcome() {
  return (
    <StyledWelcome>
      <StyledWelcomeMessage>
        <Pulse forever={true}>
        <Logo />
        </Pulse>
        <StyledHeader1>This week at </StyledHeader1>
        <StyledHeader1>Shepherd's Advisory Service:</StyledHeader1>
        <StyledHeader2>Have you considered ... </StyledHeader2>
        <StyledList>
          <li>Imperdiet massa tincidunt nunc pulvinar sapien et ligula</li>
          <li>
            Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit
            amet venenatis
          </li>
          <li>
            Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam
          </li>
        </StyledList>
        <StyledHeader3>
          Stay abreast of currency fluctuations as they occur with our Forex
          Chart
        </StyledHeader3>
        <StyledHeader3>
          Read up on the latest world news as it's being made with our Live Feed
        </StyledHeader3>
        <StyledHeader3>
          Or get the best advice by following the features below ...
        </StyledHeader3>
      </StyledWelcomeMessage>
      <WelcomeService />
      <WelcomeProduct />
      <WelcomeProfile />
    </StyledWelcome>
  );
}
