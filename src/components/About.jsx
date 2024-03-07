import React from "react";
import Card from "./Card";
import rect1 from "../assets/rect1.png";
import rect2 from "../assets/rect2.png";
const About = () => {
  return (
    <div className="m-2 mb-4 sm:m-10 shadow-md rounded-lg p-4 border-2 bg-white">
      <h2 className="font-bold text-xl mb-3">About Bitcoin</h2>
      <div className="border-b-2 border-gray-200">
        <h2 className="mb-3 font-bold">What is bitcoin?</h2>
        <p className="mb-3">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="border-b-2 mt-3 border-gray-200">
        <h3 className="mb-3 font-bold">Lorem ipsum dolor sit amet</h3>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
          <br />
          <br />
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at. <br />
          <br />
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
      <div className="border-b-2 border-gray-200  ">
        <h2 className="my-3 font-bold">Already holding Bitcoin?</h2>
        <div className="flex flex-col sm:flex-row  items-center justify-start my-2">
          <Card
            title="Calculate your profits"
            image={rect1}
            gradient="from-green-400 to-blue-500"
          />
          <Card
            title="Calculate your tax liability"
            image={rect2}
            gradient="from-orange-200 to-red-500"
          />
        </div>
      </div>
      <div className="mt-3">
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </div>
  );
};

export default About;
