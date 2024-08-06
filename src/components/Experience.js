import React, { useState } from 'react';
import {exportRenderExperienceHandler} from './sharedData/globalRenderControls';
import { experienceSelector } from './sharedData/globalStorage';
import ExperienceItem from './ExperienceItem';

const Experience = ({ experienceType }) =>
{
    const [experienceToDisplay, setExperienceToDisplay] = useState(experienceSelector[experienceType]);
    exportRenderExperienceHandler(experienceType, setExperienceToDisplay);
    
    // console.log(`rendeerin experienct tyupe = ${experienceType}`)
    // console.log(experienceToDisplay)
    
    
    // modify below thung
    const displayProjectsArrayMapped = [...experienceToDisplay].map((experience) =>
    // const displayProjectsArrayMapped = [...matchingProjsAND].map((project) =>
    {
        // console.log(Object.values(experienceToDisplay))
        // console.log(experience)
        return (
            <ExperienceItem
                 experience={experience}
            />    
        );
    })

    

    const renderAccordions = displayProjectsArrayMapped.length > 0;//bg-[#5b49ec]
    const accordionsCode = (// bg-indigo-900 
        <div className="px-3 py-1 pt-4 rounded-xl ">
            {React.createElement(React.Fragment, {}, ...displayProjectsArrayMapped)}
        </div>
    );

    return (
        <div className="p-1 lg:pt-4">
            <h2 className="p-2">
                {experienceType}
            </h2>
            {renderAccordions && accordionsCode}
        </div>
        
    );
};

export default Experience;