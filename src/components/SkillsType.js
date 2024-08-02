import React from "react";
import SkillNormal from "./SkillNormal";
import SkillCheckBoxButton from "./SkillCheckBoxButton";

const SkillsType = ({ skillSelectable, skillType }) =>
{
    let renderMapper;
    if(skillSelectable)
    {
        renderMapper = (skill) =>
        {
            return (
                <li className="text-white">
                    <SkillCheckBoxButton skill={skill}/>
                </li>
            );
        };
    }
    else
    {
        renderMapper = (skill) =>
        {
            return (
                <li className="text-white text-xs bg-green-500 m-2   ">
                    <SkillNormal skill={skill}/> 
                    {/* {skill} */}
                </li>
            );
        };
    }

    const skillsList = skillType[1].map(renderMapper);

    return (
        <>
        <h3 className="p-2 text-indigo-300">
            {skillType[0]}
        </h3>
        <ul className="flex flex-wrap">
            {React.createElement(React.Fragment, {}, ...skillsList)}
        </ul>
        </>
    )
};

export default SkillsType;