import React, { useEffect, useState } from "react";
import Chart from "./LineChart";
import Bitcoin from "../assets/image 160.png";
import LineChart from "./LineChart";
import axios from "axios";

const Hero = () => {
  const [price, setPrice] = useState();
  const [inrPrice, setInrPrice] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true",
        {
          headers: { "x-cg-demo-api-key": import.meta.env.VITE_demo_key },
        }
      )
      .then((res) => {
        setPrice(res.data.bitcoin.usd);
        setInrPrice(res.data.bitcoin.inr);
        console.log(res.data);
      });
  }, [price, inrPrice]);
  return (
    <div className="m-2  sm:m-10 w-[97%]  shadow-md rounded-lg p-4 border-2 bg-white">
      <div className="flex  items-center justify-start mb-4">
        <img className="ml-2" src={Bitcoin} alt="bitcoin" />
        <h2 className="text-3xl font-bold m-2"> Bitcoin </h2>
        <h3 className="text-gray-500">BTC</h3>
      </div>
      <div className="border-b-2 pb-4 mx-1 mb-3">
        <h1 className="font-semibold text-4xl mb-2">$ {price}</h1>
        <h3 className="font-medium ">₹ {inrPrice}</h3>
      </div>
      <div className="p-2 mb-1">
        <h2 className="font-semibold">Bitcoin Price Chart(USD)</h2>
      </div>
      <div className="rounded-lg w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Hero;
