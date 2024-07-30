var renderSkills;

const exportRenderSkillsHandler = (renderHandler) =>
{
    renderSkills = renderHandler;
};

var renderExperience =
{
    work: () => {},
    projects: () => {}
};

const exportRenderExperienceHandler = (experienceType, renderHandler) =>
{
    renderExperience[experienceType] = renderHandler;
};


export { renderSkills,
         exportRenderSkillsHandler,
         renderExperience,
         exportRenderExperienceHandler
       }