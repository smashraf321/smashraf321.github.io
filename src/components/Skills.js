import React, { memo, useState } from "react";
import {skillsDict, skillTitle} from "./profileDetails/skillsDetails";
import { exportRenderSkillsHandler } from "./sharedData/globalRenderControls";
import SkillsType from "./SkillsType";

const Skills = () =>
{
    const [skillSelectable, setSkillSelectable] = useState(false);
    exportRenderSkillsHandler(setSkillSelectable);
    // console.log(`renderin skills`)
    
    const skills = Object.entries(skillsDict).map((skillType) =>
        {
            return (
                <SkillsType skillSelectable={skillSelectable} skillType={skillType}/>
            );   
        }
    );

    return (
        <div className="pt-2">
            <h2 className="2xl:ps-5 pt-1">
                {skillTitle}
            </h2>
            {React.createElement(React.Fragment, {}, ...skills)}
        </div>
    );
}

export default Skills;