import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";


const StyledContainer = styled.div` 
  width: 35rem;
  background: ${({ theme })=> theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h3 {
    margin-top: 0;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.primaryHover};
    text-transform: uppercase;
  }
  h4 {
    margin-top: 0;
    font-size: 2rem;
    color: ${({ theme }) => theme.lblue};
    text-transform: uppercase;
  }
  a {
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.silver};
    text-decoration: none;
    cursor: pointer;
  }

`;




export default function PaySuccess(props) {
  const [loading, setLoading] = useState(false);
  let products = [];
  const [cName, setCName] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [sesh, setSesh] = useState("");
    
  const { refdata } = useStaticQuery(graphql`
    query {
      refdata: allSanityProducts {
        nodes {
          name
          pricecode
        }
      }
    }
  `);

    useEffect(() => {
     let finished = false;

     const runSet = async () => {
      await setCName(sessionStorage.getItem("cName"));
      await setProductDetails(sessionStorage.getItem("Items"));
      await setSesh(sessionStorage.getItem("id"));
      setLoading(loading);
      if (loading && cName !== "") {
        products = JSON.parse(productDetails);
        finished = true;
      }
    }  
      runSet();

      if (finished) {
        setLoading(!loading)
      }
 
})

  const data = refdata.nodes 
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
        <h3>Thanks for your purchase {cName}</h3>
     <h4>Your tax invoice is being sent via email.</h4>
     <h4>Until it arrives, take note of this reference:{sesh}</h4>
     <h4>We will be in contact with you shortly to make arrangements for your purchases</h4>
     <Link to="/home">Click Here To Continue Browsing</Link>
      </StyledContainer>
    )
  }
  else {
   
   return (
    <StyledContainer>
     <h3>Thanks for your purchase {cName}</h3>
     <h4>Your tax invoice is being sent via email.</h4>
     <h4>Until it arrives, take note of this reference:{sesh}</h4>
     <h4>We will be in contact with you shortly to arrange your:{resItems.name}</h4>
     <Link to="/home">Click Here To Continue Browsing</Link>
    </StyledContainer>
  );
  }
}
