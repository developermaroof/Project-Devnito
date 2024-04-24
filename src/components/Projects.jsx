import React from "react";
import ProjectSlider from "../Sliders/ProjectSlider";
import "../Stylings/projectSlider.css";

const Projects = () => {
  return (
    <div className="bg-gray-100">
      <div className=" xl:max-w-screen-xl xl:mx-auto">
        <ProjectSlider>
          <div className="gap-8  flex flex-col p-4 md:flex-row md:justify-center md:items-center">
            <div className="py-4 ">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=546,fit=crop/Yg2L97XkEKFBOPbq/26-YD084rB50zHoWJgv.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl text-gray-700 font-bold">MenaJobs.io</h1>
              <p className="py-4 text-sm">
                We led MenaJobs.io's development, shaping it into a
                user-friendly job portal. My work spanned planning, design,
                coding, and optimization—the result: a trusted platform
                connecting job seekers and employers in the MENA region.
                Mobile-friendly, secure, and performance-driven, it's now a
                go-to resource for career growth.
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
          <div className="gap-8  flex flex-col p-4 md:flex-row md:justify-center md:items-center">
            <div className="py-6">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=546,fit=crop/Yg2L97XkEKFBOPbq/27-ALpBo87Gx5Ua9oLz.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl text-gray-700 font-bold">APK-Hub</h1>
              <p className="py-6 text-sm">
                As the developer of APK-Hub, I crafted a user-friendly platform
                for discovering and exploring apps and games from the Play
                Store. My work spans design, search enhancements, mobile
                responsiveness, and security measures. APK-Hub is now a trusted
                resource, attracting a growing user base and delivering a
                top-tier user experience.
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
          <div className="gap-8  flex flex-col p-4  md:flex-row md:justify-center md:items-center">
            <div className="py-4">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=599,fit=crop,trim=0;109.63396778916545;0;109.63396778916545/Yg2L97XkEKFBOPbq/15-AVL3bP1XOMSl983l.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl text-gray-700 font-bold">
                Blend (Report Management System)
              </h1>
              <p className="py-4 text-sm">
                As our Report Management System developer, I've created a
                user-friendly platform for generating and customizing reports.
                My work spans design, data integration, security, and feedback
                mechanisms, resulting in an efficient tool for data-driven
                decision-making, enhancing productivity, and improving user
                experience.
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
        </ProjectSlider>
      </div>
    </div>
  );
};

export default Projects;
