import allProjects from '../profileDetails/projects';
import allResearch from '../profileDetails/research';
import allWorkExperience from '../profileDetails/work';

// work, projects, research, certifications(linkedin, udemy, coursera...)
const experienceSelector =
{
    Work: allWorkExperience,
    Research: allResearch,
    Projects: allProjects,
};

// overly complicated reducer lol
// const totalExperience = Object.values(experienceSelector).reduce((prevValue, arrVal)=>{
//     console.log(`<-------${prevValue}----${arrVal}------->`)
//     return prevValue + Object.values(arrVal).reduce((nestPrevValue, nestArrVal) => {
//         console.log(`<-------${nestPrevValue}......${nestArrVal}------->`)
//         return nestPrevValue + 1;
//     }, 0)
// }, 0)

const totalExperienceItems = Object.values(experienceSelector).reduce((accumulator, arrVal)=>
{
    return accumulator + Object.keys(arrVal).length;
}, 0)

var selectedSkills = new Set();

export { experienceSelector, selectedSkills, totalExperienceItems}