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
                <li className="m-1">
                    <SkillCheckBoxButton skill={skill}/>
                </li>
            );
        };
    }
    else
    {
        renderMapper = (skill) =>
        {
            return (// bg-indigo-700
                <li className="p-1 m-1 ms-[1.06rem] text-indigo-900 bg-indigo-200 border border-indigo-200 font-medium rounded-lg ">
                    <SkillNormal skill={skill}/> 
                    {/* {skill} */}
                </li>
            );
        };
    }

    const skillsList = skillType[1].map(renderMapper);

    return (
        <>
        <h3 className="py-2 px-1 lg:px-6 text-purple-200">
            {skillType[0]}
        </h3>
        <ul title={`${skillType[0]} skills list`} className="lg:ps-2 flex flex-wrap">
            {React.createElement(React.Fragment, {}, ...skillsList)}
        </ul>
        </>
    )
};

export default SkillsType;