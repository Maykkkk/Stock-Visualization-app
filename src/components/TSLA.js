// TSLA.js
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./TSLA.css"; // Import the updated TSLA.css

function TSLAChart() {
  const [data, setData] = useState(null);

  const createChart = () => {
    if (data) {
      const chartData = {
        labels: data.map((item) => item.fiscalDate),
        datasets: [
          {
            label: "TSLA Stock Price",
            data: data.map((item) => item.netIncome),
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      };

      const ctx = document.getElementById("tsla-chart").getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: chartData,
      });
    }
  };

  useEffect(() => {
    const fetchTSLAData = async () => {
      try {
        const response = await fetch("https://api.iex.cloud/v1/data/core/cash_flow/tsla?token=pk_90dc811d4f4c4d97a2d7d132d8420647&last=4");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching TSLA data:", error);
      }
    };

    fetchTSLAData();
  }, []);

  useEffect(() => {
    createChart();
  }, [data]);

  return (
    <div className="tsla-container">
      <div className="tsla-image">
        <img src="/tesla_logo_gif.gif" alt="Tesla Logo" className="tesla-logo" />
      </div>
      <div className="tsla-chart">
        <canvas id="tsla-chart" width="400" height="200"></canvas>
      </div>
      <div className="tsla-info">
        <h2>Tesla Stock Data</h2>
        <p>Explore the performance of Tesla's stock over time.</p>
      </div>
    </div>
  );
}

export default TSLAChart;
