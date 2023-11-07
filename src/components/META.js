import React, { useEffect, useState } from "react";
import "./AAPL.css"; // You can create a separate CSS file for META if needed

function METACard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMETAData = async () => {
      try {
        const response = await fetch("https://cloud.iexapis.com/stable/stock/META/quote?token=pk_90dc811d4f4c4d97a2d7d132d8420647"); // Replace YOUR_API_KEY with your actual API key
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching META data:", error);
      }
    };

    fetchMETAData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <div className="ticker-container">
          <img src="/056202161793237.63cac2884a1fc.gif" alt="Meta Logo" className="meta-logo" />
            <div className="ticker-details">
              <h2 className="ticker-title">META Stock Data</h2>
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
                Welcome to the META Stock Data page! Here, you can find the latest stock price and previous close data for Meta Platforms, Inc. (META). Stay updated with real-time stock information.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading META data...</p>
      )}
    </div>
  );
}

export default METACard;
