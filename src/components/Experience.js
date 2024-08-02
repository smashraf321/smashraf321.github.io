import React, { useState } from 'react';
import {exportRenderExperienceHandler} from './sharedData/globalRenderControls';
import { experienceSelector } from './sharedData/globalStorage';
import ExperienceItem from './ExperienceItem';

const Experience = ({ experienceType }) =>
{
    const [experienceToDisplay, setExperienceToDisplay] = useState(experienceSelector[experienceType]);
    exportRenderExperienceHandler(experienceType, setExperienceToDisplay);
    
    
    // -------------------------
    // const displayProjectsArray = [1,2,3];
    // const displayProjectsArrayMapped = displayProjectsArray.map((num) =>
    // {
    //     return (<p>{num}</p>)
    // });
    // -------------------------

    // -------------------------
    // const displayProjectsArray = Object.values(allProjectsDict);
    // const displayProjectsArrayMapped = displayProjectsArray.map((projectDetails) =>
    // {
    //     return (
    //     <Accordion
    //      title={projectDetails.projectname}
    //      answer={projectDetails.answer}
    //     />
    //     );
    // });
    // -------------------------

    // -------------------------
    // const displayProjectsArray = Object.keys(allProjectsDict);
    // const displayProjectsArrayMapped = displayProjectsArray.map((projectDetails) =>
    // {
    //     return (
    //     <Accordion
    //      title={allProjectsDict[projectDetails].projectname}
    //      answer={allProjectsDict[projectDetails].answer}
    //     />
    //     );
    // });
    // -------------------------

    let selectedSkills = new Set(["java","python","c"]);

    let matchingProjsOR = new Set();
    let matchingProjsAND = new Set();
    
    
    console.log(`rendeerin experienct tyupe = ${experienceType}`)
    console.log(experienceToDisplay)
    
    
    // modify below thung
    const displayProjectsArrayMapped = [...experienceToDisplay].map((experience) =>
    // const displayProjectsArrayMapped = [...matchingProjsAND].map((project) =>
    {
        console.log(Object.values(experienceToDisplay))
        console.log(experience)
        return (
            <ExperienceItem
                 experience={experience}
            />    
        );
    })

    

    const renderAccordions = displayProjectsArrayMapped.length > 0;//bg-[#5b49ec]
    const accordionsCode = (
        <div className="px-3 py-1 pt-4 rounded-xl bg-indigo-900 ">
            {React.createElement(React.Fragment, {}, ...displayProjectsArrayMapped)}
        </div>
    );

    return (
        <div className="p-4">
            <h2 className="p-2 text-green-300 text-left">
                {experienceType}
            </h2>
            {renderAccordions && accordionsCode}
        </div>
        
    );
};

export default Experience;