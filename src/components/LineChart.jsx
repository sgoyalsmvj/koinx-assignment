import React, { useEffect, useRef, useState, memo } from "react";

function LineChart({ symbol }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      // width: "837",
      // height: "574",
      symbol: symbol || "CRYPTO:BTCUSD", // Default symbol is "CRYPTO:BTCUSD"
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "2",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "rgba(255, 255, 255, 1)",
      hide_top_toolbar: true,
      allow_symbol_change: true,
      calendar: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com",
    });
    container.current.innerHTML = ""; // Clear previous content
    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="h-[400px]">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "10%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "100%", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default LineChart;
