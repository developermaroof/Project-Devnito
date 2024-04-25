import React from "react";
import "../Stylings/trends.css";

const Trends = () => {
  return (
    <div className="gradient">
      <div
        id="solution"
        className=" px-4 py-8 md:flex md:items-center lg:px-20 xl:max-w-screen-xl xl:mx-auto"
      >
        <div>
          <h2 className="font-semibold text-lg md:text-xl">DIGITAL TRENDS</h2>
          <div className="hidden md:block bg-primary w-72 h-0.5 my-2"></div>
          <h1 className="text-2xl text-gray-800 font-bold py-5 md:text-3xl md:py-8 lg:text-4xl">
            Transforming businesses through
            <span className="text-primary"> IT solutions</span>
          </h1>
          <button className="bg-primary text-white px-5 py-2 mb-8 mt-2 text-sm rounded md:text-lg md:px-12">
            VIEW NOW!
          </button>
        </div>
        <div>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=546,fit=crop/Yg2L97XkEKFBOPbq/26-YD084rB50zHoWJgv.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Trends;
