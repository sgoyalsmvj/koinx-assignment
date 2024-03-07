import React from "react";

const Range = ({ title, value }) => {
  return (
    <div className="">
      <h3 className="text-grey-800 font-normal m-2">{title}</h3>
      <h2 className="text-xl m-2">{value}</h2>
    </div>
  );
};

export default Range;
