import React, { memo } from "react";
import SkillNormal from "./SkillNormal";

const ExperienceItemBody = ({ body }) =>
{
    const { description, skills } = body;
    
    // console.log(`$$$$$$$$$$ ------ skills ---- ${skills}`)
    const skillsList = [...skills].map((skill) =>
    {
        // console.log(`SKLZZ --- ${description} ---${skill}`)
        return (// 
            <li className="p-1 me-1 mt-1 rounded-lg bg-indigo-200 text-indigo-900 font-medium text-xs 2xl:text-sm">
                <SkillNormal skill={skill}/>
            </li>
        );
    });
    return (
        <div className="p-4 leading-5">
        {description}
        <h4 className="mt-1">Skills</h4>
        <ul title="skills used" className="flex mt-1 flex-wrap">
            {React.createElement(React.Fragment, {}, ...skillsList)}
        </ul>
        </div>
    );
}

export default ExperienceItemBody;