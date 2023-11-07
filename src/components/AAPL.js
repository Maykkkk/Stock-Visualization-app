import React, { useEffect, useState } from "react";
import "./AAPL.css";

function AAPLChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAAPLData = async () => {
      try {
        const response = await fetch("https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_90dc811d4f4c4d97a2d7d132d8420647"); // Replace YOUR_API_KEY with your actual API key
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching AAPL data:", error);
      }
    };

    fetchAAPLData();
  }, []);

  return (
    <div>
      {data ? (
  <div>
    <div className="ticker-container">
      <img src="/KjHc.gif" alt="Apple Logo" className="apple-logo" />
      <div className="ticker-details">
        <h2 className="ticker-title">AAPL Stock Data</h2>
        <table className="ticker-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Net Income</th>
              <th>Current Price</th>
              {/* Add more table headers */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-10-25</td>
              <td>$56,517,000,000</td>
              <td>$2,229,100,000</td>
              <td>{data.latestPrice}</td>
              {/* Add more table data rows */}
            </tr>
          </tbody>
        </table>
        <p className="fancy-paragraph">
      Welcome to the AAPL Stock Data page! The table above provides detailed financial information about Apple Inc. (AAPL) shares. You can find data related to revenue, net income, and the current stock price. It's a great way to stay informed about AAPL's performance.
    </p>
      </div>
    </div>
  </div>
) : (
  <p>Loading AAPL data...</p>
)}

    </div>
  );
}

export default AAPLChart;
