const SectionBase = ({ sectionTitle, sectionContent }) =>
{
    return (
        <div>
            <h2 className="text-green-300">
                {sectionTitle}
            </h2>
            {sectionContent}
        </div>
    );
};

export default SectionBase;