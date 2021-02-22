import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
import Logo from "./Logo";


const StyledContainer = styled.div` 
  width: 30rem;
  margin: 4rem auto;
  background: ${({ theme })=> theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    margin-top: 0;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.primaryHover};
    text-transform: uppercase;
  }
  p {
    margin-top: 0;
    font-size: 2rem;
    color: ${({ theme }) => theme.dblue};
    
  }
  a {
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.silver};
    text-decoration: none;
    cursor: pointer;
  }
  .reference {
    overflow-wrap: break-word;
    font-size: 1rem;
    width: 90%;
    margin: 2rem auto;
    color: ${({ theme }) => theme.silver};
  }
  @media (min-width: 1440px) {
    width: 20vw;
    padding: 1vw;
    h3 {
      font-size: 1.4vw;
    }
    p {
      font-size: 1.2vw;
    }
    a {
      font-size: 1vw;
    }
    .reference {
      font-size: 0.75vw;
      margin: 1vw auto;
    }
  }

`;




export default function PaySuccess({ refData }) {
  const [loading, setLoading] = useState(false);
  const products = useRef();
  const [cName, setCName] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [sesh, setSesh] = useState("");
    

    useEffect(() => {
     let finished = false;

     const runSet = async () => {
      await setCName(sessionStorage.getItem("cName"));
      await setProductDetails(sessionStorage.getItem("Items"));
      await setSesh(sessionStorage.getItem("id"));
      setLoading(loading);
      if (loading && cName !== "") {
        let temp = JSON.parse(productDetails)
        temp = products.current.value;
        finished = true;
      }
    }  
      runSet();

      if (finished) {
        setLoading(!loading)
      }
 
})

  const data = refData;
  let resItems = [];
   
  function nameFind(data, products) {
    products.map((item) => {
      resItems = data.find((dataItem) => dataItem.pricecode === item.price);   
      return {
        ...item,
        itemName: resItems.name,
        itemPrice: resItems.pricecode,
      }
  });
}

nameFind(data, products);

  if (resItems.length > 1) {
    return (
      <StyledContainer>
           <Pulse forever={true}>
      <Logo className="css animated"/>
      </Pulse>
        <h3>Thanks for your purchase {cName}</h3>
     <p>Your tax invoice is being sent via email.</p>
     <p>Until it arrives, take note of this reference:</p>
     <p className="reference">{sesh}</p>
     <p>We will be in contact with you shortly to make arrangements for your purchases</p>
     <Link to="/home">Click Here To Continue Browsing</Link>
      </StyledContainer>
    )
  }
  else {
   
   return (
    <StyledContainer>
         <Pulse forever={true}>
      <Logo className="css animated"/>
      </Pulse>
     <h3>Thanks for your purchase {cName}</h3>
     <p>Your tax invoice is being sent via email.</p>
     <p>Until it arrives, take note of this reference:</p>
     <p className="reference">{sesh}</p>
     <p>We will be in contact with you shortly to arrange your:{resItems.name}</p>
     <Link to="/home">Click Here To Continue Browsing</Link>
    </StyledContainer>
  );
  }
}
