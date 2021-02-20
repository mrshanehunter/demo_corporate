import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.lblue};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3900;
  transition: transform 0.3s ease-in-out;
  transform:${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  .logo {
    align-self: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    .logo {
      align-self: center;
    }
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.dblue};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  
  .topFoot {
    margin-top: 14rem;
    padding-bottom: 0;
    font-size: 1.2rem;
    letter-spacing: 0.25rem;
  }
  .foot {
    margin-top: 0;
    padding-bottom: 0;
    font-size: 1.2rem;
    letter-spacing: 0.25rem;
  }

  h5 {
    font-size: 1.2rem;
    font-family: "baskerville-display-pt";
    font-weight: bold;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.dblue};
    text-decoration: none;
    text-align: center;
  }


`;