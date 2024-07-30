import React from 'react';
import Experience from './Experience';
import FilterExperience from './FilterExperience';
import { experienceSelector } from './sharedData/golbalStorage';
import Skills from './Skills';

const TechnicalDetails = () =>
{
    const ExperienceList = Object.keys(experienceSelector).map((experienceType) => {
        return (
            <Experience experienceType={experienceType}/>
        );
    });
    return (
        <div>
            <Skills/>
            <FilterExperience/>
            {React.createElement(React.Fragment, {}, ...ExperienceList)}
        </div>
    );// add loop for exp types?
};

export default TechnicalDetails;