import React from "react";
import RingChart from "./RingChart";
import ring from "../assets/ring.png";
const Tokenomics = () => {
  return (
    <div className="m-10 w-[60%]shadow-md rounded-lg p-4 border-2 bg-white">
      <h1 className="font-bold text-xl mb-3">Tokenomics</h1>
      <div>
        <h2 className="mb-3 font-bold">Initial Distribution</h2>
        <div className="flex flex-col">
          <div className="flex items-center ">
            <img className="h-40 w-40 my-3" src={ring} alt="ring" />
            <div className="m-5">
              <ul>
                <li className="m-1">🔵 Crowdsale investors: 80%</li>
                <li className="m-1">🟡 Foundation: 20%</li>
              </ul>
            </div>
          </div>
          {/* <RingChart /> */}
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum
            alias minus nulla quo iusto voluptatem harum voluptatum, asperiores
            labore id tempore eius nihil esse repellendus magnam animi ut
            explicabo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
