import React from "react";

const TeamCard = ({ image, name, paragraph, designation }) => {
  return (
    <div className="flex items-center justify-center p-2 bg-blue-100 mb-3 rounded-lg">
      <div className="flex flex-col justify-center items-center m-2 w-64">
        <img className="rounded-md m-1 " src={image} alt="image" />
        <h2 className="font-bold mt-2">{name}</h2>
        <span className="text-gray-400 text-sm">{designation}</span>
      </div>
      <div className="ml-5 mr-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          veritatis numquam sed sunt vitae dolor voluptate, possimus distinctio
          ut soluta maxime aliquam repellat impedit cupiditate dolorem
          temporibus quam atque itaque?
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
