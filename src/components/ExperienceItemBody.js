import React from "react";
import SkillNormal from "./SkillNormal";

const ExperienceItemBody = ({ body }) =>
{
    const { answer, skills } = body;
    
    const skillsList = [...skills].map((skill) =>
    {
        console.log(`SKLZZ -- ${skill}`)
        return (
            <li>
                <SkillNormal skill={skill}/>
            </li>
        );
    });
    return (
        <>
        {answer}
        <ul>
            {React.createElement(React.Fragment, {}, ...skillsList)}
        </ul>
        </>
    );
}

export default ExperienceItemBody;