import { selectedSkills } from "./sharedData/globalStorage";

const SkillCheckBoxButton = ({ skill }) =>
{
    const handleCheckBoxInput = (checkBoxEvent) => {
        checkBoxEvent.target.checked ?
        selectedSkills.add(checkBoxEvent.target.value) :
        selectedSkills.delete(checkBoxEvent.target.value);
        // console.log(selectedSkills);
    }

    return (
        <div className="flex">
            <input type="checkbox"
            id={skill}
            name={skill}
            value={skill}
            onChange={handleCheckBoxInput}
            className="opacity-0 peer"
            />
            <label htmlFor={skill} className="select-none cursor-pointer p-1 rounded-lg border border-violet-200 font-medium peer-checked:bg-indigo-200 peer-checked:text-indigo-900 peer-checked:border peer-checked:border-indigo-200">
                {skill}
            </label>
            
        </div>
    );// hover effects may not be needed-> hover:text-green-300, peer-checked:hover:text-indigo-200
};

export default SkillCheckBoxButton;