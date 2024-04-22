import React, { useState } from "react";

const SkillsDesktop = () => {
  const [activeSection, setActiveSection] = useState("frontend");

  const toggleVisibility = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-center items-center w-full gap-10 lg:gap-0 lg:px-8">
        <div className="w-full">
          <h1 className="font-bold text-skillsHeading text-3xl">
            Tech-stack for Our Website Development Firm
          </h1>
        </div>
        <div className="w-full">
          <p className="py-6 text-xs text-gray-600">
            As an experienced website development firm, we understand the
            significance of the latest technologies to give a competitive edge
            to clients in the market. We deploy evolving technologies to build
            innovative web solutions ensuring rich feature-based
            functionalities.
          </p>
        </div>
      </div>
      <div className="flex mt-8 justify-center text-center items-center gap-10 lg:justify-start lg:pl-8 lg:gap-16">
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer lg:text-lg ${
              activeSection === "frontend" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("frontend")}
          >
            Front-end
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "backend" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("backend")}
          >
            Back-end
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "databases" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("databases")}
          >
            Databases
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "tools" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("tools")}
          >
            Tools
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "operatingSystems" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("operatingSystems")}
          >
            Operating Systems
          </h2>
        </div>
      </div>
      <div className="mt-3 w-full h-0.5 bg-gray-300"></div>
      <div className="mt-4">
        {activeSection && (
          <ul className="px-4 text-sm my-2 flex gap-8">
            {activeSection === "frontend" && (
              <>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  HTML & CSS
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  React.js
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  JavaScript
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Three.js
                </li>

                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Material-UI
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Bootstrap
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  GraphQL
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Tailwind CSS
                </li>
              </>
            )}
            {activeSection === "backend" && (
              <>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Node.js
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Express.js
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  GraphQL
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Prisma
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  MySQL
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  PostgreSQL
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Drizzle ORM
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  MongoDB
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Next Auth
                </li>
              </>
            )}
            {activeSection === "databases" && (
              <>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  MySQL
                </li>

                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Supabase
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  PlanetScale
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  PostgreSQL
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  MongoDB
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Firebase
                </li>
              </>
            )}
            {activeSection === "tools" && (
              <>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Sublime Text
                </li>

                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Appwrite
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  OpenAI
                </li>

                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Convex
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Stripe
                </li>

                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Server Actions
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Docker
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Typescript
                </li>
              </>
            )}
            {activeSection === "operatingSystems" && (
              <>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Microsoft Windows
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  macOS
                </li>
                <li className="font-semibold bg-white w-full p-2 text-skillsHeading text-center">
                  Linux
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SkillsDesktop;
