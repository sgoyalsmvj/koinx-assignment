import React from "react";
import Deck from "./Deck";
import news from "../assets/news.png";
import trend from "../assets/trend.png";

const Sentiment = () => {
  return (
    <div className="m-2 mb-4 sm:m-10 shadow-md rounded-lg p-4 border-2 bg-white">
      <h2 className="font-bold text-xl mb-3">Sentiment</h2>
      <h3 className="mb-3 font-semibold">Key Events ℹ️</h3>
      <div className="flex overflow-hidden items-center justify-start">
        <Deck
          bgColor="blue-100"
          icon={news}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum excepturi illo dolorem aliquid rem incidunt numquam, quos adipisci natus quas ex, quis cum voluptas libero laboriosam tempore fuga earum?"
        />
        <Deck
          bgColor="green-100"
          icon={trend}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum excepturi illo dolorem aliquid rem incidunt numquam, quos adipisci natus quas ex, quis cum voluptas libero laboriosam tempore fuga earum?"
        />
      </div>
      <div>
        <h3 className="mt-5 mb-3 font-semibold">Analyst Estimates ℹ️</h3>
        <div className="flex flex-row items-center justify-between">
          <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center">
            76%
          </div>
          <div className="flex flex-col justify-around items-start mt-4 sm:mt-0">
            <div className="flex items-center">
              <span className="m-3">Buy</span>
              <div className="bg-green-200 w-28 sm:w-[600px] h-2 rounded"></div>
              <span className="m-2 sm:mx-3">76%</span>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <span className="m-3">Hold</span>
              <div className="bg-gray-200 w-6 sm:w-[100px] h-2 rounded"></div>
              <span className="m-2 sm:mx-3">6%</span>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <span className="m-3">Sell</span>
              <div className="bg-red-500 w-12 sm:w-[200px] h-2 rounded"></div>
              <span className="m-2 sm:mx-3">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
