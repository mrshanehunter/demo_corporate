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
    margin: 0;
    background: ${({ theme }) => theme.primaryHover};
    color: ${({ theme }) => theme.dblue};
    border-style: none;
    font-size: 1.6rem;
    letter-spacing: 2px;
    font-family: "futura-pt";
    text-transform: uppercase;
    cursor: pointer;
    @media (min-width: 1440px) {
      width: 21vw;
      height: 2vw;
      font-size: 1.2vw;
      letter-spacing: 0.25vw;
    }
  }
  .svcbtnb {
    width: 30rem;
    height: 3rem;
    margin: 0;
    background: ${({ theme }) => theme.dblue};
    color: ${({ theme }) => theme.primaryHover};
    border-style: none;
    font-size: 1.6rem;
    letter-spacing: 2px;
    font-family: "futura-pt";
    text-transform: uppercase;
    cursor: pointer;
    @media (min-width: 1440px) {
      width: 21vw;
      height: 2vw;
      font-size: 1.2vw;
      letter-spacing: 0.25vw;
    }
  }
  .slideBtn {
    background: none;
    border-style: none;
    border: 0.1rem groove ${({ theme }) => theme.silver};
    padding: 0;
    border-radius: 1rem;
    box-shadow: 0 0 1vw 1vw rgba(0, 0, 0, 0.5);
    cursor: pointer;
    .gatsby-image-wrapper {
      border-radius: 1rem;
    }
  }
  .flipTo {
    background: none;
    border: 0.05rem solid ${({ theme }) => theme.silver};
    padding: 0;
    border-radius: 1rem;
    box-shadow: 0 0 1vw 1vw rgba(0, 0, 0, 0.5);
    cursor: pointer;
    .gatsby-image-wrapper {
      border-radius: 1rem;
  }
  }
  .flipBack {
    color: ${({ theme }) => theme.primaryHover};
    cursor: pointer;
    font-size: 3rem;
    background: none;
    border-style: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 1rem 0 0;
    @media (min-width: 1440px) {
      font-size: 2vw;
      padding: 0.75vw 0.75vw;
    }
  }  

  .product {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background: ${({ theme }) => theme.dblue};
    padding: 0 1rem 0 1.5rem;
    border: 0.1rem groove ${({ theme }) => theme.silver};
    border-radius: 1rem;
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
    @media (min-width: 1440px) {
      h2 {
        font-size: 1.4vw;
        margin-left: 0.5vw;
      }
      h3 {
        font-size: 1.2vw;
        margin-left: 0.5vw;
      }
      h4 {
        font-size: 0.75vw;
        margin-left: 0.5vw;
        padding-top: 0.5vw;
      }
      p {
        font-size: 1vw;
        padding: 0 1vw;
      }
      .btnDiv {
        margin-bottom: 0.75vw;
      }
    }
  }
  .atcBtn {
    width: 75%;
    padding: 0.75rem 0;
    margin: 0 auto;
    background: ${({ theme }) => theme.primaryHover};
    border-color: ${({ theme }) => theme.silver};
    color: ${({ theme }) => theme.dblue};
    font-size: 1.6rem;
    border-radius: 5px;
    letter-spacing: 2px;
    font-family: "futura-pt";
    text-transform: uppercase;
    cursor: pointer;
    @media (min-width: 1440px) {
      font-size: 1.2vw;
      letter-spacing: 0.25vw;
    }
  }
  
.cartProduct {
  color: ${({ theme }) => theme.primaryHover};
  font-size: 1.8rem;
  text-align: center;
  @media (min-width: 1440px) {
    font-size: 1.2vw;
  }
}
.cartTtl {
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.silver};
  text-transform: uppercase;
  margin: 0;
  @media (min-width: 1440px) {
    font-size: 1.4vw;
    margin-top: 1vw;
  }
}
.cartGST {
  font-size: 1.4rem;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.silver};
  text-transform: uppercase;
  margin: 0;
  @media (min-width: 1440px) {
    font-size: 1vw;
    margin-bottom: 1vw;
  }
}
.checkOutImg {
  width: 25rem;
  height: 25rem;
  border-radius: 1rem;
  border: 0.05rem solid #1978a5;
  align-self: center;
 
  @media (min-width: 1440px) {
    width: 15vw;
    height: 15vw;
    margin-top: 1vw;
    margin-left: 1.5vw;
  }
}
.checkOut {
  width: 60%;
  margin-left: 20%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.primaryHover};
  font-size: 1.8rem;
  font-family: "futura-pt";
  padding: 1rem;
  border-color: ${({ theme }) => theme.silver};
  text-transform: uppercase;
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  color: ${({ theme }) => theme.dblue};
  letter-spacing: 2px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  @media (min-width: 1440px) {
    font-size: 1.2vw;
      letter-spacing: 0.25vw;
  }
}
.remove {
  background: transparent;
  border: 0.05rem solid ${({ theme }) => theme.primaryHover};
  border-radius: 5px;
  color: ${({ theme }) => theme.silver};
  text-align: center;
  text-transform: uppercase;
  font-family: "futura-pt";
  box-shadow: 0.05rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  letter-spacing: 2px;
  padding: 0.5rem 0;
  cursor: pointer;
  width: 50%;
  margin-left: 25%;
  @media (min-width: 1440px) {
    font-size: 1vw;
    letter-spacing: 0.25vw;
  }
}

.carousel-container {
  visibility: hidden;
  @media (min-width: 768px) {
    visibility: visible;
    border-top: 4px ridge ${({ theme }) => theme.silver};
    border-bottom: 3px groove ${({ theme }) => theme.silver};
    box-shadow: 0.05rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  }
}



`;

export default GlobalStyles;