import { useState } from "react";
import { totalExperienceItems } from "./sharedData/globalStorage";

const FilterResults = ({exportResultsSetter}) =>
{
    const [displayResultsMessage, setNumResults] = useState(`Showing ${totalExperienceItems} items`)
    exportResultsSetter(setNumResults);
    return (
        <>
        { displayResultsMessage.slice(-1) === " "
          ? (<p>{displayResultsMessage}&nbsp;</p>)
          : (<p>{displayResultsMessage}</p>)
        }
        </>
        
    );
}

export default FilterResults;