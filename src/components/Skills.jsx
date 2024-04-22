import React from "react";
import SkillsMobile from "../miniComponents/SkillsMobile";
import SkillsDesktop from "../miniComponents/SkillsDesktop";

const Skills = () => {
  return (
    <div>
      <div className="md:hidden">
        <SkillsMobile />
      </div>
      <div className="hidden md:block">
        <SkillsDesktop />
      </div>
    </div>
  );
};

export default Skills;
