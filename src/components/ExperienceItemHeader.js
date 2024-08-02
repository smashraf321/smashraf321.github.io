// return (
//   <>
//   <span>{projectname}</span>
//   {accordionOpen ? <span>-</span> : <span>+</span>}
//   </>
// )

import React from "react";
import SkillNormal from "./SkillNormal";

const ExpandIcon = ({ accordionOpen }) =>
{
  return (//fill-indigo-500
    <svg
          className="fill-sky-300 shrink-0 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
  );
}

const ExperienceItemHeader = ({ header, accordionOpen }) =>
    {
      const { name , domains} = header

      const headerTags = [...domains].map((domain)=>
      {
        return (
          <li className="text-xs p-1 me-1 mt-1 rounded-lg bg-sky-200 text-indigo-700">
          <SkillNormal skill={domain} />
        </li>
        );
        
      })
        return (
            <div className="p-1 flex flex-wrap justify-between rounded-xl bg-indigo-700">
              <div className="w-10/12 text-left p-1">
              
              <h3>{name} </h3>
                <p>tr</p>
                <span>time</span>
              
                
                <ul title="domain areas" className="flex flex-wrap">
                  {React.createElement(React.Fragment, {}, ...headerTags)}
                </ul>
              </div>
              <div className="my-auto pr-2">
              <ExpandIcon accordionOpen={accordionOpen}/>
              </div>
        </div>
        );
    }
    
export default ExperienceItemHeader;