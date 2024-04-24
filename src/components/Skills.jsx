import React from "react";
import SkillsMobile from "../miniComponents/SkillsMobile";
import SkillsDesktop from "../miniComponents/SkillsDesktop";

const Skills = () => {
  return (
    <div className="bg-gray-100">
      <div className="xl:max-w-screen-xl xl:mx-auto">
        <div className="md:hidden">
          <SkillsMobile />
        </div>
        <div className="hidden md:block">
          <SkillsDesktop />
        </div>
      </div>
    </div>
  );
};

export default Skills;
