import React from "react";
import SkillCategoryGrid from "./SkillCategoryGrid";
import { skillCategories } from "../../constants/skills";

function Toolstack() {
  const collaborationCategories = skillCategories.slice(3);

  return <SkillCategoryGrid categories={collaborationCategories} />;
}

export default Toolstack;
