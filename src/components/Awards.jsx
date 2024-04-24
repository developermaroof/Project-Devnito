import React from "react";
import AwardSlider from "../Sliders/AwardSlider";
import Clutch from "../assets/awards/Clutch.webp";
import Dot from "../assets/awards/dot-com.webp";
import Expertise from "../assets/awards/expertise-logo.webp";
import HorizonSilver from "../assets/awards/Horizon_Sliver.webp";
import Horizon from "../assets/awards/Horizon.webp";
import Inc from "../assets/awards/inc-5000.webp";
import Rank from "../assets/awards/rank-watch.webp";
import Right from "../assets/awards/right-firms.webp";
import TopDev from "../assets/awards/top_developer.webp";
import TopRated from "../assets/awards/top_Reated.webp";
import Web from "../assets/awards/web-excellence-award.webp";

const Awards = () => {
  return (
    <div className="xl:max-w-screen-xl xl:mx-auto">
      <AwardSlider>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Horizon} alt="" className="w-44 h-auto" />
          <h1 className="text-lg  text-gray-700 font-semibold">
            Horizon Award
          </h1>

          <p>Gold Awards Winner 2020</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Dot} alt="" className="w-44 h-auto" />
          <h1 className="text-lg  text-gray-700 font-semibold">Dot Comm</h1>
          <p>Excellence in Web Creativity &amp; Digital Communication</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Inc} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">INC. 5000</h1>
          <p>America's Fastest Growing Companies</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Rank} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">Rank Watch</h1>
          <p>Top Web Development Agencies 2023</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={HorizonSilver} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">Horizon Award</h1>
          <p>Silver Awards Winner 2020</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Clutch} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">Clutch</h1>
          <p>Top 1000 Companies</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Right} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">Right firms</h1>
          <p>Top Mobile App Development Company 2023</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={TopDev} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">
            Top Entertainment
          </h1>
          <p>Top Entertainment App Developers</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Expertise} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">Expertise</h1>
          <p>Best Mobile App Developer</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={TopRated} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">Top Rated</h1>
          <p>Top App Development Companies</p>
        </div>
        <div className="flex justify-center items-center text-center flex-col text-xs">
          <img src={Web} alt="" className="w-44 h-auto" />
          <h1 className="text-lg text-gray-700 font-semibold">
            Web Excellence
          </h1>
          <p>Web Excellence Awards</p>
        </div>
      </AwardSlider>
    </div>
  );
};

export default Awards;
