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
`;