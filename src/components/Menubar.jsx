import React from "react";

const Menubar = () => {
  return (
    <div className="m-2 mt-3 sm:m-10 overflow-hidden ">
      <ul className="flex  justify-start items-center font-semibold pb-4    border-b-2 text-gray-600 ">
        <li className="ml-2 mr-4 hover:text-blue-700 ">Overview</li>
        <li className="mx-4">Fundaments</li>
        <li className="mx-4">News Insights</li>
        <li className="mx-4">Sentiments</li>
        <li className="mx-4">Team</li>
        <li className="mx-4">Technicals</li>
        <li className="mx-4">Tokenomics</li>
      </ul>
    </div>
  );
};

export default Menubar;
