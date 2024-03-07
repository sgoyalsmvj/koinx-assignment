import React from "react";
import frame from "../assets/Frame.png";

const Advertisement = () => {
  return (
    <div className="bg-blue-600 flex flex-col justify-center items-center text-white w-[400px] ml-0 mr-8 mt-8 rounded-lg p-16 text-center">
      <div>
        <h1 className="font-bold text-2xl mb-3">
          Get Started with KoinX for FREE
        </h1>
      </div>
      <div className="mb-3">
        <p>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
      <div className="flex justify-center items-center mb-3">
        <img src={frame} alt="frame" />
      </div>
      <div className="bg-white w-[70%] flex justify-center items-center text-black rounded-md font-semibold p-2">
        <button>Get started for Free ➡️</button>
      </div>
    </div>
  );
};

export default Advertisement;
