import { useState } from "react";
import ExperienceItemHeader from "./ExperienceItemHeader";
import ExperienceItemBody from "./ExperienceItemBody";

const ExperienceItem = ({ experience }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);

  console.log(experience)

  const { header, body } = experience;

  return (
    <div>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="p-3 rounded-lg flex flex-wrap justify-between w-full hover:bg-blue-200 text-wrap"
      >
        <ExperienceItemHeader header={header} accordionOpen={accordionOpen}/>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ExperienceItemBody body={body} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
