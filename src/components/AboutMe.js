const AboutMe = () =>
{
    const retval1 = (
        <>
        <p className="text-red-600">me nooba</p>
        <p className="text-red-600">me bigger nooba also</p>
        </>
    );
    const retval2 = (
        <div className="p-4">
            <h2 className="p-2 text-green-300 text-left">
                About Me
            </h2>
            {retval1}
        </div>
    );
    return retval2;
};

export default AboutMe;