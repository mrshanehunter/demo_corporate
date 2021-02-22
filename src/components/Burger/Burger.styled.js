import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4100;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 3rem;
    height: 0.5rem;
    background: ${({ theme, open }) => open ? theme.dblue : theme.lblue };
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }
  @media (min-width: 1440px) {
    position: absolute;
    top: 5%;
    left: 2vw;
    width: 2vw;
    height: 2vw;
    div {
      width: 2vw;
      height: 0.25vw;
      border-radius: 0.15vw;
      transform-origin: 0.095vw;
    }
  }
`;