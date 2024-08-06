import aboutMe from "./profileDetails/aboutMe";

const AboutMe = () =>
{
    const retval2 = (
        <div className="lg:ps-5 pb-1">
            <h2 className="pb-2">
                About Me
            </h2>
            <div className="pe-2 text-sm">
            {aboutMe}
            </div>   
        </div>
    );
    return retval2;
};

export default AboutMe;