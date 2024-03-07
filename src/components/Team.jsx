import React from "react";
import TeamCard from "./TeamCard";
import mask1 from "../assets/mask1.png";
import mask2 from "../assets/mask2.png";
import mask3 from "../assets/mask3.png";

const Team = () => {
  return (
    <div className="m-2 sm:m-10 shadow-md rounded-lg p-4 border-2 bg-white">
      <h1 className="font-bold text-xl mb-3">Team</h1>
      <div className="mb-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste
          consectetur nam aperiam delectus velit. Explicabo hic quos architecto
          quasi distinctio aspernatur dolorum facilis suscipit dicta inventore,
          placeat quo molestias?
        </p>
      </div>
      <div className="flex flex-col  p-2 ">
        <TeamCard
          image={mask1}
          name="John Smith"
          designation="Designation Here"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste
          consectetur nam aperiam delectus velit. Explicabo hic quos architecto
          quasi distinctio aspernatur dolorum facilis suscipit dicta inventore,
          placeat quo molestias?"
        />
        <TeamCard
          image={mask2}
          name="John Smith"
          designation="Designation Here"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste
          consectetur nam aperiam delectus velit. Explicabo hic quos architecto
          quasi distinctio aspernatur dolorum facilis suscipit dicta inventore,
          placeat quo molestias?"
        />
        <TeamCard
          image={mask3}
          name="Elina Williams"
          designation="Designation Here"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste
          consectetur nam aperiam delectus velit. Explicabo hic quos architecto
          quasi distinctio aspernatur dolorum facilis suscipit dicta inventore,
          placeat quo molestias?"
        />
      </div>
    </div>
  );
};

export default Team;
