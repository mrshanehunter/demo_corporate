import styled from 'styled-components';

export const ServiceStyleFront = styled.div` 
  width: 30rem;
  height: 30rem,;
  display: grid;
  grid-template-rows: 27rem 3rem;
  grid-template-columns: 30rem;
  background: ${({ theme }) => theme.dblue};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  justify-content: center;
  @media (min-width: 1440px) {
    width: 21vw;
    height: 21vw;
    display: grid;
    grid-template-rows: 19vw 2vw;
    grid-template-columns: 21vw;
    justify-content: center;
  }
`;

export const ServiceStyleBack = styled.div` 
  width: 30rem;
  height: 30rem;
  display: grid;
  grid-template-rows: 2.5rem 1fr 3rem;
  grid-template-columns: 30rem;
  border: 1px solid ${({ theme }) => theme.dblue};
  background-color: ${({ theme }) => theme.silver};
  color: ${({ theme }) => theme.dblue};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  justify-content: center;
  h2 {
    text-transform: uppercase;
  }
  @media (min-width: 1440px) {
    width: 21vw;
    height: 21vw;
    display: grid;
    grid-template-rows: 2.5vw 1fr 2vw;
    grid-template-columns: 21vw;
    h2 {
      font-size: 1.4vw;
      margin-left: 1vw;
    }
    p {
      font-size: 1vw;
      padding-left: 1vw;
    }
   
  }
`;