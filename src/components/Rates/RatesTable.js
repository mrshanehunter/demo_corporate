import React from "react";
import styled from "styled-components";

const StyledExchange = styled.div`
  width: 20rem;
  /* height: 40rem; */
  margin: 4rem 1rem;
  background: ${({ theme }) => theme.blue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  h2 {
    font-size: 1.8rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
  }
  div {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 97.5%;
    grid-template-rows: auto auto 1rem 1fr 1rem auto;
  }
  @media (min-width: 1024px) {
    width: 25rem;
  }
`;

const RatesTable = (props) => {
  const { rates } = props;
  const DateNow = Date.now();
  const now = new Date(DateNow).toString();

  if (!rates || rates.length === 0) return <p>No rates available today</p>;
  return (
    <StyledExchange>
      <h2>FOREX Rates</h2>
      <h2>Base Rate: ${rates.data.base}</h2>
      <hr />
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
      <hr />
      <h2>Updated {now}</h2>
    </StyledExchange>
  );
};

export default RatesTable;
