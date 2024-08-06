// return (
//   <>
//   <span>{projectname}</span>
//   {accordionOpen ? <span>-</span> : <span>+</span>}
//   </>
// )

import React, { memo } from "react";
import SkillNormal from "./SkillNormal";

const ExpandIcon = ({ accordionOpen }) =>
{
  return (//fill-indigo-500 //maybe mention aria-hidden="true"?
    <svg
          aria-hidden="true"
          className="fill-violet-200 shrink-0 "
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="5"
            width="12"
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
      const { name , time, domains} = header



      const headerTags = [...domains].map((domain)=>//bg-sky-300 good also
      {
        return (// bg-sky-200 text-indigo-900  font-medium
          <li className="p-1 me-2 mt-2 rounded-lg text-violet-950 bg-violet-300 font-medium"> 
          <SkillNormal skill={domain} />
        </li>
        );
        
      })
        return (// bg-indigo-700 with bg-indigo-900
            <div className="p-1 flex flex-wrap justify-between rounded-md border border-violet-200 border-2 bg-stone-800">
              <div className="w-11/12 text-left text-purple-200 leading-6 p-1">
                <h3>{name} </h3>
                <p className="text-base">{header?.title}</p>
                <p className="text-sm text-zinc-200"><em>{time}</em> </p>
                <ul title="domain areas" className="flex flex-wrap">
                  {React.createElement(React.Fragment, {}, ...headerTags)}
                </ul>
              </div>
              <div className="my-auto pr-1">
              <ExpandIcon accordionOpen={accordionOpen}/>
              </div>
        </div>
        );
    }
    
export default ExperienceItemHeader;