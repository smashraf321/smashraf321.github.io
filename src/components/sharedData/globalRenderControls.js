var renderSkills;

const exportRenderSkillsHandler = (renderHandler) =>
{
    renderSkills = renderHandler;
};

var renderExperience =
{
    // Work: () => {},
    // Research: () => {},
    // Projects: () => {}
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