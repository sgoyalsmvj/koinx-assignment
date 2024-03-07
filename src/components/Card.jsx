import React from "react";

const Card = ({ title, image, gradient }) => {
  return (
    <div
      className={`w-80 bg-gradient-to-br ${gradient} rounded-md p-2 m-2 flex justify-around items-center shadow-2xl`}
    >
      <div>
        <img className="h-28" src={image} alt="image" />
      </div>
      <div className="flex flex-col justify-center items-center m-3 text-white font-semibold">
        <h3 className="text-xl">{title}</h3>
        <button className="mt-1 p-2 rounded-lg font-medium border-3 bg-white text-black">
          Check Now ➡️
        </button>
      </div>
    </div>
  );
};

export default Card;
