import React from "react";
import ProjectSlider from "../Sliders/ProjectSlider";
import "../Stylings/projectSlider.css";

const Projects = () => {
  return (
    <div className="bg-gray-100">
      <div id="projects" className=" xl:max-w-screen-xl xl:mx-auto">
        <ProjectSlider>
          {/*  */}
          <div className="gap-8  flex flex-col py-8 px-20 md:flex-row justify-center items-center">
            <div className="py-4 w-full">
              <img
                src="https://cdn.sanity.io/images/fxul9ln3/production/4443646bac70015c710729ae2d8b945c11f7bdd1-1920x1080.png"
                alt=""
              />
            </div>
            <div className="w-full">
              <h1 className="text-2xl text-gray-700 font-bold">
                Buy It Ecommerce Store
              </h1>
              <p className="py-4 font-bold text-sm">
                Ecommerce / Stripe Payments
              </p>
              <h6 className="text-sm font-semibold">Challenges Faced</h6>
              <ul className="px-4 text-xs list-disc my-2">
                <li className="pb-2">
                  Complex and time-consuming car leasing processes
                </li>
                <li>Lack of transparency in pricing and terms</li>
              </ul>
              <h6 className="text-sm font-semibold">Benefits Delivered</h6>
              <ul className="px-4 text-xs list-disc my-2">
                <li className="pb-2">
                  Reduced leasing time by 40% through an intuitive app interface
                </li>
                <li>Enhanced transparency with clear pricing and terms</li>
              </ul>
              <button className="p-3 my-4  text-xs font-semibold border-2 rounded border-black">
                View More Projects
              </button>
            </div>
          </div>
          {/*  */}
          <div className="gap-8  flex flex-col py-8 px-20 md:flex-row justify-center items-center">
            <div className="py-4 w-full">
              <img
                src="https://cdn.sanity.io/images/fxul9ln3/production/e457e4b166e7b4ad527d8c8a723e35253659670c-1920x1080.png"
                alt=""
              />
            </div>
            <div className="w-full">
              <h1 className="text-2xl text-gray-700 font-bold">
                Memories Social Media App
              </h1>
              <p className="py-4 font-bold text-sm">
                Social Media / Management
              </p>
              <h6 className="text-sm font-semibold">Challenges Faced</h6>
              <ul className="px-4 text-xs list-disc my-2">
                <li className="pb-2">
                  Limited online presence impacting sales
                </li>
                <li>Inefficient and outdated e-commerce platform</li>
              </ul>
              <h6 className="text-sm font-semibold">Benefits Delivered</h6>
              <ul className="px-4 text-xs list-disc my-2">
                <li className="pb-2">
                  3X online sales within the first six months
                </li>
                <li>
                  Improved customer engagement with a user-friendly interface
                </li>
              </ul>
              <button className="p-3 my-4  text-xs font-semibold border-2 rounded border-black">
                View More Projects
              </button>
            </div>
          </div>
          {/*  */}
          <div className="gap-8  flex flex-col py-8 px-20 md:flex-row justify-center items-center">
            <div className="py-4 w-full">
              <img
                src="https://cdn.sanity.io/images/fxul9ln3/production/56d74a8100b504dec86bc299f0fd01f152ab2a4f-1920x1080.png"
                alt=""
              />
            </div>
            <div className="w-full">
              <h1 className="text-2xl text-gray-700 font-bold">
                Diaries Manager
              </h1>
              <p className="py-4 font-bold text-sm">
                Productivity / Management
              </p>
              <h6 className="text-sm font-semibold">Challenges Faced</h6>
              <ul className="px-4 text-xs list-disc my-2">
                <li className="pb-2">
                  Fragmented shopping experience across multiple online stores
                </li>
                <li>Lack of a centralized platform for product discovery</li>
              </ul>
              <h6 className="text-sm font-semibold">Benefits Delivered</h6>
              <ul className="px-4 text-xs list-disc my-2">
                <li className="pb-2">
                  Increased user engagement with a one-stop shopping solution
                </li>
                <li>
                  Improved conversion rates through a simplified checkout
                  process
                </li>
              </ul>
              <button className="p-3 my-4  text-xs font-semibold border-2 rounded border-black">
                View More Projects
              </button>
            </div>
          </div>
          {/*  */}
        </ProjectSlider>
      </div>
    </div>
  );
};

export default Projects;
