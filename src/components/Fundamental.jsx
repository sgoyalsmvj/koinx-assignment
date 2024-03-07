import React from "react";

const Fundamental = ({ title, value }) => {
  return (
    <div className="flex  justify-between border-b-2 p-2 items-center  ">
      <div className="text-gray-400 text-sm font-extralight mx-3">{title}</div>
      <div className="text-black text-sm font-semibold">{value}</div>
    </div>
  );
};

export default Fundamental;
