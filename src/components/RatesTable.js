import React from "react";
import styled from "styled-components";


const StyledExchange = styled.div`
  width: 20rem;
  /* height: 40rem; */
  margin: 4rem;
  background: ${({ theme }) => theme.blue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  border-radius: 1rem;
  padding: 1rem;
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    text-align: center;
  }
  ul {
    font-size: 1.8rem;
  }
  div {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
  
export default function RatesTable({ rates }) {



  return (
    <StyledExchange>
      <h2>Currency Rates</h2>
      <h2>{rates.date}</h2>
      <h2>Base Rate:{" "}&euro;{rates.base}</h2>
      
     <div>
        <p>AUD:{" "}${rates.rates.AUD}</p>
        <p>USD:{" "}${rates.rates.USD}</p>
        <p>GBP:{" "}&#8356;{rates.rates.GBP}</p>
        <p>NZD:{" "}${rates.rates.NZD}</p>
        <p>SGD:{" "}${rates.rates.SGD}</p>
        <p>HKD:{" "}${rates.rates.HKD}</p>
        <p>CAD:{" "}${rates.rates.CAD}</p>
      </div>     
      <h3>Last Updated:{" "}{rates.timestamp}</h3>
    </StyledExchange>
  )
}