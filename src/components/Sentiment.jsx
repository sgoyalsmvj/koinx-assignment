import React from "react";
import Deck from "./Deck"; // Assuming Deck.jsx is in the same directory as Sentiment.jsx
import news from "../assets/news.png";
import trend from "../assets/trend.png";

const Sentiment = () => {
  return (
    <div className="m-10 w-[60%]shadow-md rounded-lg p-4 border-2 bg-white">
      <h2 className="font-bold text-xl mb-3">Sentiment</h2>
      <h3 className=" mb-3 font-semibold">Key Events ℹ️</h3>
      <div className="flex items-center justify-start">
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
        <div className="flex items-center justify-start">
          <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center">
            <span>76%</span>
          </div>
          <div>
            <div className="flex items-center justify-start">
              <div>
                <span className="m-3 ">Buy</span>
              </div>
              <div className="bg-green-200 w-80 h-2 rounded"></div>
              <span className="m-2">76%</span>
            </div>
            <div className="flex items-center justify-bstart">
              <div>
                <span className="m-3 ">Hold</span>
              </div>
              <div className="bg-gray-200 w-32 h-2 rounded"></div>
              <span className="m-2">6%</span>
            </div>
            <div className="flex items-center justify-bstart">
              <div>
                <span className="m-3 ">Sell</span>
              </div>
              <div className="bg-red-500 w-52 h-2 rounded"></div>
              <span className="m-2">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
