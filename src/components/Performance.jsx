import React from "react";
import Range from "./Range";
import RangeChart from "./RangeChart";
import Fundamental from "./Fundamental";

const Performance = () => {
  return (
    <div className="m-2 mb-4 sm:m-10 shadow-md rounded-lg p-4 border-2 bg-white">
      <h2 className="font-bold text-xl mb-3">Performance</h2>
      <div className="flex  items-center justify-between ">
        <Range title="Today's Low" value="46,930.22"></Range>
        <RangeChart />
        <Range title="Today's High" value="49,933.22"></Range>
      </div>
      <div className="flex  items-center justify-between">
        <Range title="52 W Low" value="46,930.22"></Range>
        <RangeChart />

        <Range title="52 W High" value="49,933.22"></Range>
      </div>
      <div>
        <h3 className="mt-5 mb-3 font-semibold">Fundamentals ℹ️</h3>
        <div className="flex flex-col sm:flex-row  items-center justify-between">
          <div className="w-full">
            <Fundamental title={"Bitcoin Price"} value={"$16,815.46"} />
            <Fundamental
              title={"24h Low / 24h High"}
              value={"$16,382.07 / $16,874.12"}
            />
            <Fundamental
              title={"7d Low / 7d High"}
              value={"$16,382.07 / $16,874.12"}
            />
            <Fundamental title={"Trading Volume"} value={"$23,249,202,782"} />
            <Fundamental title={"Market Cap Rank"} value={"#1"} />
          </div>
          <div className="w-full">
            <Fundamental title={"Market Cap"} value={"$323,507,290,047"} />
            <Fundamental title={"Market Cap Dominance"} value={"38.343%"} />
            <Fundamental title={"Volume / Market Cap"} value={"0.0718"} />
            <Fundamental title={"All-Time High"} value={"$69,044.77 -75.6%"} />
            <Fundamental title={"All-Time Low"} value={"$67.81 24729.1%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
