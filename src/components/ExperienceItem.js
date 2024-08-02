import { useState } from "react";
import ExperienceItemHeader from "./ExperienceItemHeader";
import ExperienceItemBody from "./ExperienceItemBody";

const ExperienceItem = ({ experience }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  console.log(experience)

  const { header, body } = experience;
  
  return (
    <>
      <button
        title="ghhh"
        onClick={() => setAccordionOpen(!accordionOpen)} // justify-between was used in button // !accordion transition-all  ease-in // accordiom transition-all  ease-out
        className={` w-full text-white ${accordionOpen && "bg-slate-800 rounded-t-xl "}`}
      >
        <ExperienceItemHeader header={header} accordionOpen={accordionOpen}/>
      </button>
      <div
        className={`grid overflow-hidden transition-all ease-out duration-100 text-sm rounded-b-xl bg-slate-800 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mb-4"
            : "grid-rows-[0fr] opacity-0" // grid-rows-[0fr] opacity-50
        }`}
      >
        <div className="p-2 overflow-hidden text-slate-100 ">
          <ExperienceItemBody body={body} />
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
