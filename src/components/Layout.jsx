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

const Layout = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <Navbar />
      <span className="relative top-4 left-5">
        Cryptocurrencies{" >> "} Bitcoin
      </span>
      <div className="flex justify-between items-start ">
        <div>
          <Hero />
          <Menubar />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="m-2">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default Layout;
