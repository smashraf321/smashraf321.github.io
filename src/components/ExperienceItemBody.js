import React from "react";
import SkillNormal from "./SkillNormal";

const ExperienceItemBody = ({ body }) =>
{
    const { answer, skills } = body;
    
    const skillsList = [...skills].map((skill) =>
    {
        console.log(`SKLZZ -- ${skill}`)
        return (
            <li className="text-xs p-1 me-1 mt-1 rounded-lg bg-indigo-200 text-indigo-700">
                <SkillNormal skill={skill}/>
            </li>
        );
    });
    return (
        <div className="p-2">
        {answer}
        <ul className="flex flex-wrap">
            {React.createElement(React.Fragment, {}, ...skillsList)}
        </ul>
        </div>
    );
}

export default ExperienceItemBody;