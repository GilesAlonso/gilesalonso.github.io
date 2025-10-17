import React from "react";
import SkillCategoryGrid from "./SkillCategoryGrid";
import { skillCategories } from "../../constants/skills";

function Techstack() {
  const coreCategories = skillCategories.slice(0, 3);

  return <SkillCategoryGrid categories={coreCategories} />;
}

export default Techstack;
