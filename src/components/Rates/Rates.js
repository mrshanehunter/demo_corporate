import React, { useEffect, useState } from 'react';
import RatesTable from "./RatesTable";
import WithRatesLoading from "./WithRatesLoading";


const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.GATSBY_NEWS_KEY;
const finnhubClient = new finnhub.DefaultApi()
finnhubClient.forexRates({ "base": "AUD" }, (error, data, response) => {
  console.log(data)
});



export default function Rates() {
const RatesLoading = WithRatesLoading(RatesTable); 
const [appState, setAppState] = useState({
  loading: false,
  rates: null,
 });



useEffect(() => {
  setAppState({ loading: true });
  const APIkey = process.env.GATSBY_RATES_KEY;
  fetch(`http://data.fixer.io/api/latest?access_key=${APIkey}&symbols=USD,AUD,GBP,EUR,CAD,NZD,SGD,HKD`)
    .then((response) => response.json())
    .then((rates) => {
    setAppState({ loading: false, rates: rates });
  });
}, [setAppState]);


return (
  <div>
   <RatesLoading isLoading={appState.loading} rates={appState.rates} />
  </div>
)
    
}