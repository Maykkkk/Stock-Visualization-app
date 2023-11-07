import React, { useState } from "react";
import AAPLChart from "./components/AAPL";
import MSFTChart from "./components/MSFT";
import TSLAChart from "./components/TSLA";
import AMZNChart from "./components/AMZN";
import METAChart from "./components/META";
import "./styles.css";

function App() {
  const [selectedTicker, setSelectedTicker] = useState("AAPL");
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  const handleTickerChange = (event) => {
    setSelectedTicker(event.target.value);
  };

  const handleHeaderClick = () => {
    setIsHeaderExpanded(!isHeaderExpanded);
  };

  const renderChart = () => {
    switch (selectedTicker) {
      case "AAPL":
        return <AAPLChart />;
      case "MSFT":
        return <MSFTChart />;
      case "TSLA":
        return <TSLAChart />;
      case "AMZN":
        return <AMZNChart />;
      case "META":
        return <METAChart />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className={`header-container ${isHeaderExpanded ? "expanded" : ""}`} onClick={handleHeaderClick}>
        <div className={`header-content ${isHeaderExpanded ? "show" : ""}`}>
          <h1>Stock Data Visualization</h1>
        </div>
      </header>

      {/* Add the footer here */}

      <footer className="footer">
        <div className="ticker-buttons">
          <button className="ticker-button" onClick={() => setSelectedTicker("AAPL")}>
            AAPL
          </button>
          <button className="ticker-button" onClick={() => setSelectedTicker("MSFT")}>
            MSFT
          </button>
          <button className="ticker-button" onClick={() => setSelectedTicker("TSLA")}>
            TSLA
          </button>
          <button className="ticker-button" onClick={() => setSelectedTicker("AMZN")}>
            AMZN
          </button>
          <button className="ticker-button" onClick={() => setSelectedTicker("META")}>
            META
          </button>
        </div>
        <main className="main-content">
        <section className="chart-section">
          <div className="chart-container">{renderChart()}</div>
        </section>
        </main>
        
      </footer>
      {/* End of footer */}
    <footer className="fhooter">
    <p>&copy;2023 Mayank Gupta | All Rights Reserved</p>
  </footer>
    </div>
  );
}

export default App;
