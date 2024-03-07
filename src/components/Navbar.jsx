import React from "react";
import logo from "../assets/koinx.png";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center bg-white shadow-md ">
      <div className="m-4 ml-10">
        <img className="h-6" src={logo} alt="logo" />
      </div>
      <div className=" hidden sm:flex  justify-center items-center">
        <ul className="flex  justify-center items-center font-semibold">
          <li className="m-2">Crypto Taxes</li>
          <li className="m-2">Free Tools</li>
          <li className="m-2">Resource Center</li>
        </ul>
        <div className="mx-4 bg-blue-600 px-3 py-1 rounded-md">
          <button className="text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
