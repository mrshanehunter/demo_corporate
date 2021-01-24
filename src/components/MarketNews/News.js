import React, { useEffect, useState } from "react";
import NewsTable from "./NewsTable";
import WithNewsLoading from "./WithNewsLoading";



export default function News() {
  const NewsLoading = WithNewsLoading(NewsTable);
  const [appState, setAppState] = useState({
    loading: false,
    news: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = process.env.GATSBY_NEWS_KEY;
    const finnhubClient = new finnhub.DefaultApi()
    finnhubClient.generalNews("general",{}, (error, data, response) => {
    console.log(data)
    data.length = 10;
        setAppState({ loading: false, news: data });
      });
  }, [setAppState]);

  return (
    <div>
      <NewsLoading isLoading={appState.loading} news={appState.news} />
    </div>
  );
}
