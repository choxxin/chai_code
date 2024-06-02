//WE ARE MAKING HERE A CUSTOM HOOOK (whose fucntion is to fetch all currency data)

import { useEffect, useState } from "react";

//creating our main function
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  //using useffect when required to run function after everyt changes
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/" +
        currency +
        ".json"
    )
      .then(
        (res) => res.json() //one line function takes input and gives ouytput

        //converting th eupcoming string file into json
      )
      .then((res) => {
        setData(res[currency]);
      });
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
