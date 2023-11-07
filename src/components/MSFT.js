import React, { useEffect, useState } from "react";
import "./AAPL.css";

function MSFTChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMSFTData = async () => {
      try {
        const response = await fetch("https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_90dc811d4f4c4d97a2d7d132d8420647"); // Replace YOUR_API_KEY with your actual API key
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching MSFT data:", error);
      }
    };

    fetchMSFTData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <div className="ticker-container">
          <img src="/1upj.gif" alt="Microsoft Logo" className="microsoft-logo" />
            <div className="ticker-details">
              <h2 className="ticker-title">MSFT Stock Data</h2>
              <table className="ticker-table">
                <thead>
                  <tr>
                  <th>Latest Price</th>
                    <th>Previous Close</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.latestPrice}</td>
                    <td>{data.previousClose}</td>
                  </tr>
                </tbody>
              </table>
              <p className="fancy-paragraph">
                Welcome to the MSFT Stock Data page! Here, you can find the latest stock price for Microsoft Corporation (MSFT). Stay updated with real-time stock data.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading MSFT data...</p>
      )}
    </div>
  );
}

export default MSFTChart;
