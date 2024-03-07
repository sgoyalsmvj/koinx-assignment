import React from "react";
import Navbar from "./Navbar";
import Chart from "./LineChart";
import Hero from "./Hero";
import Menubar from "./Menubar";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import Advertisement from "./Advertisement";
import TrendingCoins from "./TrendingCoins";

const Layout = () => {
  return (
    <div className="bg-gray-100 ">
      <Navbar />
      <div className="px-2 py-4">
        <span className="text-gray-500">Cryptocurrencies &gt;&gt; Bitcoin</span>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center items-start sm:px-4">
        <div className="w-full ">
          <Hero />
          <Menubar />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <Advertisement />

          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default Layout;
