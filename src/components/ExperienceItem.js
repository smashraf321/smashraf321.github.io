import { useState } from "react";
import ExperienceItemHeader from "./ExperienceItemHeader";
import ExperienceItemBody from "./ExperienceItemBody";

// const ExperienceItem = ({ experience }) => {
//   const [accordionOpen, setAccordionOpen] = useState(false);

//   console.log(experience)

//   const { header, body } = experience;
  
//   return (
//     <>
//       <button
//         title="ghhh"
//         onClick={() => setAccordionOpen(!accordionOpen)} // justify-between was used in button // !accordion transition-all  ease-in // accordiom transition-all  ease-out
//         className={` w-full text-white ${accordionOpen && "bg-slate-800 rounded-t-xl "}`}
//       >
//         <ExperienceItemHeader header={header} accordionOpen={accordionOpen}/>
//       </button>
//       <div
//         className={`grid overflow-hidden transition-all ease-out duration-300 text-sm rounded-b-xl bg-slate-800 ${
//           accordionOpen
//             ? "grid-rows-[1fr] opacity-100 mb-4"
//             : "grid-rows-[0fr] opacity-0" // grid-rows-[0fr] opacity-50
//         }`}
//       >
//         <div className="p-2 overflow-hidden text-slate-100 ">
//           <ExperienceItemBody body={body} />
//         </div>
//       </div>
//     </>
//   );
// };

const ExperienceItem = ({ experience }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  console.log(experience)

  const { header, body } = experience;

  // button in h3 causes heading contents to be read twice
  return (// ${accordionOpen && "bg-slate-800"}
    <div className={`rounded-lg mb-4 border border-violet-200 bg-zinc-700`}>
      
      <button
        id={header.name + header.time}
        aria-expanded={accordionOpen}
        aria-controls={header.name + header.time + "body"}
        onClick={() => setAccordionOpen(!accordionOpen)} // justify-between was used in button // !accordion transition-all  ease-in // accordiom transition-all  ease-out
        className="w-full "
      >
        <ExperienceItemHeader header={header} accordionOpen={accordionOpen}/>
      </button>
      
      <div
        className={`grid overflow-hidden transition-all ease-out duration-100 text-sm rounded-b-xl  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0" // grid-rows-[0fr] opacity-50
        }`}
      >
        <div 
        id={header.name + header.time + "body"}
        aria-labelledby={header.name + header.time}
        className={`overflow-hidden text-white ${!accordionOpen && "hidden"}`}>
          <ExperienceItemBody body={body} />
          {/* <div className="flex justify-center">
           <button
             onClick={() => setAccordionOpen(false)} // justify-between was used in button // !accordion transition-all  ease-in // accordiom transition-all  ease-out
             className="py-1 px-2 rounded-t-xl border border-violet-200 text-xs"// bg-indigo-900
           >
             Collapse
           </button>
          </div> */}
          
        </div>
        
      </div>
    </div>
  );
};

export default ExperienceItem;
