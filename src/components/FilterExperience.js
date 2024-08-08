import { memo, useState } from "react";
import { renderExperience, renderSkills } from "./sharedData/globalRenderControls";
import { experienceSelector, selectedSkills, totalExperienceItems } from "./sharedData/globalStorage";
import allWorkExperienceDict from "./profileDetails/work";
import allProjectsDict from "./profileDetails/projects";
import FilterResults from "./FilterResults";

let updateFilterResults;

const setUpdateFilterResults = (updateFilterResultsHandler) => {
    updateFilterResults = updateFilterResultsHandler;
}

let resultsMessagePrev = `Showing ${totalExperienceItems} items`
const displayResultsMessage = (numResults) =>
{
    let displayPotentialMessage = `Showing ${numResults} items`;
    if( resultsMessagePrev === displayPotentialMessage)
    {
        displayPotentialMessage = displayPotentialMessage + " ";
    }
    resultsMessagePrev = displayPotentialMessage;
    return displayPotentialMessage;
}

const FilterButtons = ({ matchType, enabled }) =>
{
    const experienceMatcher =
    {
        all: (experienceType, matchingExperience) =>
             {
                // AND check
                // issubsetof is new feature june 2024, won't work in older
                // experienceSelector[experienceType].forEach((objval) => {
                //     selectedSkills.size > 0 && selectedSkills.isSubsetOf(objval.body.skills) && matchingExperience.add(objval)    
                // });
                experienceSelector[experienceType].forEach((objval) => {

                    let matchFound = selectedSkills.size > 0;
                    let iter = selectedSkills.values();
                    let i = iter.next();
                    while(!i.done && matchFound)
                    {
                        matchFound = matchFound && objval.body.skills.has(i.value);
                        i = iter.next();
                    }
                    matchFound && matchingExperience.add(objval);
                });

             },
        any: (experienceType, matchingExperience) =>
             {
                // OR check
                // shows experience in order of skills selected
                // selectedSkills.forEach((arrval) => {
                //     experienceSelector[experienceType].forEach((objval) => {
                //        objval.body.skills.has(arrval) && matchingExperience.add(objval);
                //     });
                // });
                // shows exp in their initial order
                // intersection is new feature june 2024, won't work in older
                // experienceSelector[experienceType].forEach((objval) => {
                //     selectedSkills.intersection(objval.body.skills).size > 0 && matchingExperience.add(objval)
                // });
                experienceSelector[experienceType].forEach((objval) => {

                    let matchFound = false;
                    let iter = selectedSkills.values();
                    let i = iter.next();
                    while(!i.done && !matchFound)
                    {
                        matchFound = objval.body.skills.has(i.value);
                        i = iter.next();
                    }
                    matchFound && matchingExperience.add(objval);
                });

             }
    };

    const renderMatchingExperience = (matchType) =>
    {
        var numResults = 0;
        Object.keys(experienceSelector).forEach(async (experienceType) =>
            {
                let matchingExperience = new Set();
                experienceMatcher[matchType](experienceType,matchingExperience);
                // console.log(` experience type = ${experienceType} matchin exp = ${matchingExperience}`)
                // console.log(matchingExperience)
                numResults += matchingExperience.size    
                await renderExperience[experienceType](matchingExperience);
                [...matchingExperience].forEach(async(expItem) =>
                {
                    await expItem.accordionHandler(expItem.displayExpanded);
                }
                )
                     
            }
        )
        updateFilterResults(displayResultsMessage(numResults));
    }
    return (
        
        <button
         disabled={!enabled}
         name={matchType}
         //aria-describedby="filterresults"
         className="p-1 text-indigo-900 bg-indigo-200 rounded-xl mt-1 me-1 font-medium max-w-[47%]" // max-w-[34%]
         onClick={() =>
                  {
                     renderMatchingExperience(matchType);
                  }
                 }
        >
            Get items with <strong>{matchType}</strong> of the selected skills 
        </button>
    );
}

const RestoreButton = ({ enabled }) =>
{
    return (
        <button
         disabled={!enabled}
         //aria-describedby="filterresults"
         className="p-1 text-indigo-900 bg-indigo-200 rounded-xl font-medium mt-1 me-1"//max-w-[26%]
         onClick={async () =>
                  {
                    selectedSkills.clear();
                    Object.entries(experienceSelector).forEach(async(experience) =>
                    {
                        await renderExperience[experience[0]](experience[1]);
                        experience[1].forEach((expItem) =>
                        {
                            expItem.accordionHandler(expItem.displayExpanded);
                        }
                        )
                    });
                    await renderSkills(!enabled);
                    await renderSkills(enabled);
                    
                    updateFilterResults(displayResultsMessage(totalExperienceItems));
                  }
                 }
        >
            Clear and Restore defaults
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
            Object.entries(experienceSelector).forEach(async(experience) =>
            {
                await renderExperience[experience[0]](experience[1]);
                experience[1].forEach((expItem) =>
                    {
                        expItem.accordionHandler(expItem.displayExpanded);
                    }
                    )
            });
        }
        // activate AND/OR filter options
        setFilterModeEnabled(checkBoxEvent.target.checked);
    }

    

    return (
        <div className=" lg:px-5 py-2">
            <div className="flex">
            <div className="flex">
            <label htmlFor={checkBoxLabel} className=" m-1 ">
                Filter Mode to enable skill-based filtering
            </label>
            <input type="checkbox"
            id={checkBoxLabel}
            name={checkBoxLabel}
            value={checkBoxLabel}
            onChange={handleCheckBoxInput}
            aria-checked={filterModeEnabled}
            />
            </div >
            <div id="filterresults" className="m-1 ms-3" aria-live="polite">
            {
                filterModeEnabled && (
                    <FilterResults exportResultsSetter={setUpdateFilterResults} />
                )
            }
            </div>
            </div>
            
            {
                filterModeEnabled && (
                    <div className="flex flex-wrap justify-center">
                        <FilterButtons matchType="all" enabled={filterModeEnabled}/>
                        <FilterButtons matchType="any" enabled={filterModeEnabled}/>
                        <RestoreButton enabled={filterModeEnabled}/>
                    </div>
                )
            }
        </div>
    );
};

export default FilterExperience;