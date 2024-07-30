import allProjects from '../profileDetails/projects';
import allWorkExperience from '../profileDetails/work';

// work, projects, research, certifications(linkedin, udemy, coursera...)
const experienceSelector =
{
    work: allWorkExperience,
    projects: allProjects
};


var selectedSkills = new Set();

export { experienceSelector, selectedSkills}