import axios from "axios";
import React, { useEffect, useState } from "react";

const TrendingCoins = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending", {
        headers: { "x-cg-demo-api-key": import.meta.env.VITE_demo_key },
      })
      .then((res) => {
        setData(res.data.coins);
      });
  }, []);

  // Limiting the data to only three items
  const limitedData = data.slice(0, 3);

  return (
    <div className="m-2  sm:m-10 w-[97%]  shadow-md rounded-lg p-4 border-2 bg-white">
      <h1 className="font-bold text-xl mb-3 ">Trending Coins (24h) </h1>
      {limitedData.map((item) => (
        <div
          className="flex items-center justify-between mb-3 "
          key={item.item.id}
        >
          {" "}
          <div className="flex justify-start items-center">
            <img
              className="h-8 mr-4 rounded-full"
              src={item.item.small}
              alt="coin"
            />
            <div className="font-semibold text-lg">{item.item.name}</div>
          </div>
          <div className="bg-green-100 px-2 py-1 rounded">
            <div>🔼 8.21%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
