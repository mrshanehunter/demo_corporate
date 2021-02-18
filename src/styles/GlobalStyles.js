import { createGlobalStyle } from 'styled-components';
import bg from '../images/global.jpg';

const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    background: ${({ theme }) => theme.dblue};
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-size: 62.5%;
    
  }  
  body {
    color: ${({ theme }) => theme.silver};
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "futura-pt";
    font-style: normal;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    font-family: "baskerville-display-pt";
    font-style: normal;
    font-weight: 400;
  }

  a {
    font-family: "baskerville-display-pt";
    font-style: normal;
    font-weight: 400;
  }


  hr {
    border: 0.05rem solid ${({ theme }) => theme.silver};

  }

 img {
    padding: 0;
    margin: 0;
  }

  .svcbtnf {
    width: 30rem;
    height: 3rem;
    background: #8bd8bd;
    border-color: #8bd8bd;
    border-style: solid;
    color: #111b30;
    margin: 0;
    cursor: pointer;
  }
  .svcbtnb {
    width: 30rem;
    height: 3rem;
    background: #1978a5;
    border-color: #1978a5;
    border-style: solid;
    color: #111b30;
    margin: 0;
    cursor: pointer;
    
  }
  .slideBtn {
    background: none;
    border-style: none;
    border-top: 0.05rem solid ${({ theme }) => theme.silver};
    border-right: 0.05rem solid ${({ theme }) => theme.silver};
    border-left: 0.05rem solid ${({ theme }) => theme.silver};
    padding: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 0 1vw 1vw rgba(0, 0, 0, 0.5);
    cursor: pointer;
    .gatsby-image-wrapper {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  }
  .product {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background: ${({ theme }) => theme.dblue};
    padding: 0 1rem 0 1.5rem;
    border-left: 0.05rem solid ${({ theme }) => theme.silver};
    border-bottom: 0.05rem solid ${({ theme }) => theme.silver};
    border-right: 0.05rem solid ${({ theme }) => theme.silver};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    h2 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.primaryHover};
      margin-bottom: 0;
    }
    h3 {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.primaryHover};
      margin: 0;
      padding: 0;
    }
    h4 {
      color: ${({ theme }) => theme.lblue};
      margin: 0;
      padding-top: 0.25rem;
    }
    .btnDiv {
      display: flex;
      margin-bottom: 1.5rem;
    }
    .desc {
      flex: 1;
    }
  }
  .atcBtn {
    width: 75%;
    padding: 0.75rem 0;
    margin: 0 auto;
    background: ${({ theme }) => theme.lblue};
    border-color: ${({ theme }) => theme.primaryHover};
    color: ${({ theme }) => theme.silver};
    font-size: 1.6rem;
    border-radius: 5px;
  }
  
.ratestable {
  width: 20rem;
  height: 20rem;
  background: red;
  font-size: 3rem;
  color: green;
}
.cartProduct {
  color: ${({ theme }) => theme.primaryHover};
  font-size: 1.8rem;
  text-align: center;
}
.cartTtl {
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.silver};
}
.cartGST {
  font-size: 1.4rem;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.silver};
}
.checkOut {
  margin-top: 3rem;
  width: 60%;
  margin-left: 20%;
  background-color: ${({ theme }) => theme.primaryHover};
  font-size: 1.8rem;
  padding: 1rem;
  border-color: ${({ theme }) => theme.silver};
  text-transform: uppercase;
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  color: ${({ theme }) => theme.dblue};
  letter-spacing: 4px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.remove {
  background: transparent;
  border: 0.05rem solid ${({ theme }) => theme.lblue};
  border-radius: 5px;
  color: ${({ theme }) => theme.silver};
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0.05rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  letter-spacing: 2px;
  padding: 0.5rem 0;
  cursor: pointer;
  width: 50%;
  margin-left: 25%;
}
`;

export default GlobalStyles;