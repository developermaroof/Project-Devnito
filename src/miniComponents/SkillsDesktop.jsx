import React, { useState } from "react";

const SkillsDesktop = () => {
  const [activeSection, setActiveSection] = useState("pernStackDevelopment");

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
      <div className="overflow-scroll flex mt-8  items-center gap-10 lg:justify-start lg:pl-8 lg:gap-16">
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer lg:text-lg ${
              activeSection === "pernStackDevelopment" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("pernStackDevelopment")}
          >
            PERN Stack Development
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "jamStackDevelopment" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("jamStackDevelopment")}
          >
            JAM Stack Development
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "frontendDevelopment" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("frontendDevelopment")}
          >
            Frontend Development
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "mernStackDevelopment" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("mernStackDevelopment")}
          >
            MERN Stack Development
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "web3.0DAppDevelopment" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("web3.0DAppDevelopment")}
          >
            Web 3.0 DApp Development
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "excelToWebConversion" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("excelToWebConversion")}
          >
            Excel to Web Conversion
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "web3.0NFTListing" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("web3.0NFTListing")}
          >
            Web 3.0 NFT Listing
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "openAIIntegration" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("openAIIntegration")}
          >
            OpenAI Integration
          </h2>
        </div>
        <div>
          <h2
            className={`font-bold text-md text-skillsHeading cursor-pointer ${
              activeSection === "ecommerceDevelopment" ? "text-orange-600" : ""
            }`}
            onClick={() => toggleVisibility("ecommerceDevelopment")}
          >
            Ecommerce Development
          </h2>
        </div>
      </div>
      <div className="mt-3 w-full h-0.5 bg-gray-300"></div>
      <div className=" overflow-scroll mt-4">
        {activeSection && (
          <ul className="px-4 text-sm my-2 flex gap-8">
            {activeSection === "pernStackDevelopment" && (
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
            {activeSection === "jamStackDevelopment" && (
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
            {activeSection === "frontendDevelopment" && (
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
            {activeSection === "mernStackDevelopment" && (
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
            {activeSection === "web3.0DAppDevelopment" && (
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
            {activeSection === "excelToWebConversion" && (
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
            {activeSection === "web3.0NFTListing" && (
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
            {activeSection === "openAIIntegration" && (
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
            {activeSection === "ecommerceDevelopment" && (
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
