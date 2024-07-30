import React, { memo, useState } from "react";
import skillsDict from "./profileDetails/skillsDetails";
import { exportRenderSkillsHandler } from "./sharedData/globalRenderControls";
import SkillsType from "./SkillsType";

const Skills = () =>
{
    const [skillSelectable, setSkillSelectable] = useState(false);
    exportRenderSkillsHandler(setSkillSelectable);
    console.log(`renderin skills`)
    
    const skills = Object.entries(skillsDict).map((skillType) =>
        {
            return (
                <SkillsType skillSelectable={skillSelectable} skillType={skillType}/>
            );   
        }
    );

    return (
        <div>
            <h2 className="p-2 text-indigo-300">
                SKillZZ
            </h2>
            {React.createElement(React.Fragment, {}, ...skills)}
        </div>
    );

    const retval1 = (
        <p className="p-2 text-indigo-400 text-left">bleh</p>
    );

    const retval2 = (
        <div className="p-4">
            <h2 className="p-2 text-indigo-300 text-left animate-pulse">
                SKillZZ
            </h2>
            {retval1}
        </div>
    );

    return retval2;
}

export default Skills;