import React, { useEffect, useState } from 'react';
import RatesTable from "./RatesTable";

export default function Rates() {
 
const [loading, setLoading] = useState(false);
const [rates, setRates] = useState();
const APIkey = process.env.GATSBY_RATES_KEY;


// useEffect(() => {
//   setLoading(loading);
//   fetch(`http://data.fixer.io/api/latest?access_key=${APIkey}&symbols=USD,AUD,GBP,EUR,CAD,NZD,SGD,HKD`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     setRates(data);
   
//   });
//   setLoading(!loading);
// }, [setRates,loading]);


return (
  <div>
   <p>Rates Table</p>
  </div>
)
    
}