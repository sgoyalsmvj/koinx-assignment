import React from "react";

const Deck = ({ icon, title, paragraph, bgColor }) => {
  return (
    <div
      className={`w-full flex items-start justify-start mr-4 p-3 rounded-lg bg-${bgColor}`}
    >
      <div className="mr-5 w-[20rem] sm:w-full  h-[20rem] sm:h-max">
        <img src={icon} alt="icon" />
      </div>
      <div className="flex flex-col mr-2">
        <div className="text-xl mb-3">{title}</div>
        <p className="text-gray-500">{paragraph}</p>
      </div>
    </div>
  );
};

export default Deck;
