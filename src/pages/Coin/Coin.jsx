import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import { Chart } from "react-google-charts";

export const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-wEhRCmzLBCegVmaazEGhLokR",
      },
    };
    
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPriceHistory = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-wEhRCmzLBCegVmaazEGhLokR",
      },
    };
    
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=7`,
        options
      );
      const data = await response.json();
      const chartData = [
        ["Time", "Price"],
        ...data.prices.map((price) => [
          new Date(price[0]),
          price[1],
        ]),
      ];
      setPriceHistory(chartData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (coinId) {
      fetchCoinData();
      fetchPriceHistory();
    }
  }, [coinId, currency]);

  if (!coinData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  const marketData = coinData.market_data;
  const currentPrice = marketData?.current_price?.[currency.name] || 0;
  const marketCap = marketData?.market_cap?.[currency.name] || 0;
  const totalVolume = marketData?.total_volume?.[currency.name] || 0;
  const high24h = marketData?.high_24h?.[currency.name] || 0;
  const low24h = marketData?.low_24h?.[currency.name] || 0;
  const priceChange24h = marketData?.price_change_percentage_24h || 0;
  const priceChange7d = marketData?.price_change_percentage_7d || 0;
  const priceChange30d = marketData?.price_change_percentage_30d || 0;
  const circulatingSupply = marketData?.circulating_supply || 0;
  const totalSupply = marketData?.total_supply || 0;
  const maxSupply = marketData?.max_supply || 0;
  const ath = marketData?.ath?.[currency.name] || 0;
  const athChange = marketData?.ath_change_percentage?.[currency.name] || 0;
  const atl = marketData?.atl?.[currency.name] || 0;
  const atlChange = marketData?.atl_change_percentage?.[currency.name] || 0;

  return (
    <div className="coin-page">
      <div className="coin-header">
        <div className="coin-name-section">
          <img src={coinData.image?.large} alt={coinData.name} />
          <div>
            <h1>{coinData.name}</h1>
            <p className="coin-symbol">{coinData.symbol.toUpperCase()}</p>
            <p className="coin-rank">Rank #{coinData.market_cap_rank || "N/A"}</p>
          </div>
        </div>
        <div className="coin-price-section">
          <h2>
            {currency.symbol}{currentPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 8,
            })}
          </h2>
          <p className={priceChange24h >= 0 ? "green" : "red"}>
            {priceChange24h >= 0 ? "+" : ""}
            {priceChange24h.toFixed(2)}% (24h)
          </p>
        </div>
      </div>

      {priceHistory.length > 1 && (
        <div className="coin-chart">
          <h3>7-Day Price Chart</h3>
          <Chart
            chartType="LineChart"
            data={priceHistory}
            options={{
              hAxis: {
                title: "Time",
                format: "MMM dd",
                textStyle: { color: "#e3e3e3" },
                titleTextStyle: { color: "#e3e3e3" },
              },
              vAxis: {
                title: `Price (${currency.symbol})`,
                textStyle: { color: "#e3e3e3" },
                titleTextStyle: { color: "#e3e3e3" },
              },
              legend: { position: "none" },
              backgroundColor: "transparent",
              colors: ["#7927ff"],
              curveType: "function",
              chartArea: { width: "85%", height: "75%" },
            }}
            width="100%"
            height="400px"
            loader={<div className="spinner"><div className="spin"></div></div>}
          />
        </div>
      )}

      {coinData.description?.en && (
        <div className="coin-description">
          <h3>About {coinData.name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: coinData.description.en.substring(0, 1000) + "...",
            }}
          />
        </div>
      )}

      {coinData.links && (
        <div className="coin-links">
          <h3>Links</h3>
          <div className="links-grid">
            {coinData.links.homepage?.[0] && (
              <a
                href={coinData.links.homepage[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
            {coinData.links.blockchain_site?.[0] && (
              <a
                href={coinData.links.blockchain_site[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blockchain Explorer
              </a>
            )}
            {coinData.links.repos_url?.github?.[0] && (
              <a
                href={coinData.links.repos_url.github[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {coinData.links.official_forum_url?.[0] && (
              <a
                href={coinData.links.official_forum_url[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Forum
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
