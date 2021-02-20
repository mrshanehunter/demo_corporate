import React, { useEffect, useState } from "react";
import NProgress from "react-nprogress";
import "nprogress/nprogress.css";
import RatesTable from "./RatesTable";
import WithRatesLoading from "./WithRatesLoading";



export default function Rates() {
  const RatesLoading = WithRatesLoading(RatesTable);
  const [appState, setAppState] = useState({
    loading: false,
    rates: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    NProgress.start();
    const finnhub = require("finnhub");
    const api_key = finnhub.ApiClient.instance.authentications["api_key"];
    api_key.apiKey = process.env.GATSBY_NEWS_KEY;
    const finnhubClient = new finnhub.DefaultApi();
    finnhubClient.forexRates({ base: "AUD" }, (error, data, response) => {
    setAppState({ loading: false, rates: { data }});
    NProgress.done();
    });
  }, [setAppState]);

  return (
    <div>
      <RatesLoading isLoading={appState.loading} rates={appState.rates} />
    </div>
  );
}
