import React from "react";
import styled from "styled-components";




const StyledRatesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 4rem;
  background: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
 
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;


const StyledExchange = styled.div`
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.lblue};
  background: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  h2 {
    font-size: 1.8rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }
  h3 {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    width: 80%;
    margin: 0 auto 2rem;
  }
  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.silver};
  }
  div {
    padding: 1.5rem;
    display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: auto auto 0.25rem 1fr 0.25rem auto;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
  @media (min-width: 1024px) {
    grid-template-rows: auto auto auto 1fr auto auto;
    div {
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
    }
    p {
      margin-top: 0.45rem;
      
    }
  }
`;

const RatesTable = (props) => {
  const { rates } = props;
  const DateNow = Date.now();
  const now = new Date(DateNow).toString();

  if (!rates || rates.length === 0) return <p>No rates available today</p>;
  return (
    <StyledRatesContainer>
    <StyledExchange>
      <h2>FOREX Rates</h2>
      <h2>Base Rate: ${rates.data.base}</h2>
      <div style={{width: `80%`, height: `0.1rem`, marginTop: `0`, paddingTop: `0`, marginBottom: `2rem`, marginLeft: `10%`, borderBottom: `thin solid #8bd8bd`}}></div>
      <div>
        <p>USD: ${rates.data.quote.USD.toFixed(4)}</p>
        <p>EUR: &euro;{rates.data.quote.EUR.toFixed(4)}</p>
        <p>GBP: &#8356;{rates.data.quote.GBP.toFixed(4)}</p>
        <p>NZD: ${rates.data.quote.NZD.toFixed(4)}</p>
        <p>JPY: &yen;{rates.data.quote.JPY.toFixed(4)}</p>
        <p>CNY: &yen;{rates.data.quote.CNY.toFixed(4)}</p>
        <p>SGD: ${rates.data.quote.SGD.toFixed(4)}</p>
        <p>HKD: ${rates.data.quote.HKD.toFixed(4)}</p>
        <p>THB: &#xe3f;{rates.data.quote.THB.toFixed(4)}</p>
        <p>IDR: &#x52;&#x70;{rates.data.quote.IDR.toFixed(2)}</p>
        <p>CAD: ${rates.data.quote.CAD.toFixed(4)}</p>
        <p>ZAR: &#x52;{rates.data.quote.ZAR.toFixed(4)}</p>
      </div>
      <div style={{width: `80%`, height: `0.1rem`, marginTop: `0`, paddingTop: `0`, marginBottom: `2rem`, marginLeft: `10%`, borderTop: `thin solid #8bd8bd`}}></div>
      <h3>Updated {now}</h3>
    </StyledExchange>
    </StyledRatesContainer>
  );
};

export default RatesTable;
