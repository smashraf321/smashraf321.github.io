import { aboutMeContent, aboutMeHeading } from "./profileDetails/aboutMe";


const AboutMe = () =>
{
    const retval2 = (
        <div className="2xl:ps-5 pb-1">
            <h2 className="pb-2">
                {aboutMeHeading}
            </h2>
            <div className="pe-2 text-sm 2xl:text-base">
            {aboutMeContent}
            </div>   
        </div>
    );
    return retval2;
};

export default AboutMe;