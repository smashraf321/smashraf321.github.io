import { memo, useState } from "react";
import { renderExperience, renderSkills } from "./sharedData/globalRenderControls";
import { experienceSelector, selectedSkills } from "./sharedData/golbalStorage";
import allWorkExperienceDict from "./profileDetails/work";
import allProjectsDict from "./profileDetails/projects";

const FilterButtons = ({ matchType, enabled }) =>
{
    const experienceMatcher =
    {
        all: (experienceType, matchingExperience) =>
             {
                // AND check
                experienceSelector[experienceType].forEach((objval) => {
                    selectedSkills.size > 0 && selectedSkills.isSubsetOf(objval.body.skills) && matchingExperience.add(objval);
                });
             },
        any: (experienceType, matchingExperience) =>
             {
                // OR check
                selectedSkills.forEach((arrval) => {
                    experienceSelector[experienceType].forEach((objval) => {
                       objval.body.skills.has(arrval) && matchingExperience.add(objval);
                    });
                });
             }
    };

    const renderMatchingExperience = (matchType) =>
    {
        Object.keys(experienceSelector).forEach(async (experienceType) =>
            {
                let matchingExperience = new Set();
                experienceMatcher[matchType](experienceType,matchingExperience);
                console.log(` experience type = ${experienceType} matchin exp = ${matchingExperience}`)
                console.log(matchingExperience)
                await renderExperience[experienceType](matchingExperience);
            }
        )
    }
    return (
        
        <button
         disabled={!enabled}
         name={matchType}
         className="p-2 text-white"
         onClick={() =>
                  {
                     renderMatchingExperience(matchType);
                  }
                 }
        >
            {matchType} button
        </button>
    );
}

const RestoreButton = ({ enabled }) =>
{
    return (
        <button
         disabled={!enabled}
         className="p-2 text-white"
         onClick={async () =>
                  {
                    selectedSkills.clear();
                    Object.entries(experienceSelector).forEach((experience) =>
                    {
                        renderExperience[experience[0]](experience[1]);
                    });
                    await renderSkills(!enabled);
                    renderSkills(enabled);
                  }
                 }
        >
            Clear and Restore default
        </button>
    );
}

const FilterExperience = () =>
{
    const [filterModeEnabled, setFilterModeEnabled] = useState(false);
    const checkBoxLabel = "EnableFilterMode";
    const handleCheckBoxInput = (checkBoxEvent) =>
    {
        // make skills selectable if checked
        renderSkills(checkBoxEvent.target.checked);
        
        if(!checkBoxEvent.target.checked)
        {
            selectedSkills.clear();
            Object.entries(experienceSelector).forEach((experience) =>
            {
                renderExperience[experience[0]](experience[1]);
            });
        }
        // activate AND/OR filter options
        setFilterModeEnabled(checkBoxEvent.target.checked);
    }

    

    

    return (
        <div>
            <input type="checkbox"
            id={checkBoxLabel}
            name={checkBoxLabel}
            value={checkBoxLabel}
            onChange={handleCheckBoxInput}
            />
            <label htmlFor={checkBoxLabel} className="text-white">
                Enter Filter Mode
            </label>
            <br/>
            <FilterButtons matchType="all" enabled={filterModeEnabled}/>
            <FilterButtons matchType="any" enabled={filterModeEnabled}/>
            <RestoreButton enabled={filterModeEnabled}/>
            

        </div>
    );
};

// export default memo(FilterExperience);
export default FilterExperience;