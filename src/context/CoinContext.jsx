import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

export const CoinContextProvider = (props) => {
  const [allCoin, setallCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "USD",
    symbol: "$",
  });

  const fetchAllCoin = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-wEhRCmzLBCegVmaazEGhLokR",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setallCoin(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
