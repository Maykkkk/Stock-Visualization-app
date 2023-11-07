import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const StockChart = () => {
  const [selectedTicker, setSelectedTicker] = useState('AAPL');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchStockData = async () => {
    try {
      const apiKey = 'C2P0TX3H7VWA54LC';

      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${selectedTicker}&apikey=${apiKey}`
      );

      if (response.data['Time Series (Daily)']) {
        const dates = Object.keys(response.data['Time Series (Daily)']);
        const closingPrices = dates.map(
          (date) =>
            parseFloat(response.data['Time Series (Daily)'][date]['4. close'])
        );

        const stockData = {
          labels: dates,
          datasets: [
            {
              label: selectedTicker,
              data: closingPrices,
              fill: false,
              borderColor: getRandomColor(),
            },
          ],
        };

        setData(stockData);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setLoading(false);
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    fetchStockData();
  }, [selectedTicker]);

  const handleTickerChange = (event) => {
    setSelectedTicker(event.target.value);
  };

  return (
    <div>
      <h2>Stock Prices</h2>
      <div>
        <label>Select Ticker:</label>
        <select value={selectedTicker} onChange={handleTickerChange}>
          <option value="AAPL">AAPL</option>
          <option value="MSFT">MSFT</option>
          <option value="TSLA">TSLA</option>
          <option value="AMZN">AMZN</option>
          <option value="META">META</option>
        </select>
      </div>
      {loading ? (
        <p>Loading stock data...</p>
      ) : (
        <div>
          {Object.keys(data).length > 0 ? (
            <Line data={data} />
          ) : (
            <p>No data available for the selected ticker.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default StockChart;
