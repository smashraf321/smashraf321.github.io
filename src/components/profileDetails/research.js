const allResearchInit =
[
    {
        header:
        {
            name: "Analyzing driving behavior in Fleet Management System",
            title: "Industry Partner: Optical Operations LLC",
            time: "Aug '18 - Aug '19",
            domains: new Set(["Data Analytics", "Sensor Fusion", "IoT", "Vehicle Telematics", "Embedded Applications", "System Automation"])
        },
        body:
        {
            description: (
                <>
                <h4>Goal</h4>
                <p>Develop a cost-effective and efficient Data Analytics IoT tool to grade driving behavior of bus drivers.</p>
                <h4>Actions</h4>
                <ul className="list-disc ps-2">
                <li>Collected data using Raspberry Pi board from multiple sources from vehicle to get information on driving behavior such as how many times driver exceeded speed limit and by how much, how fast was driver accelerating, did driver stop at stop sign, did driver jump signal, how fast was driver turning, etc.</li>
                <li>Carried out extensive data cleaning for better and faster analysis. Also visualized data for understanding patterns.</li>
                <li>Designed robust statistical model in Python to generate grade reports that also identified poor driving behavior. This was useful for taking appropriate preemptive actions such as sending drivers for additional training based on where they were making mistakes.</li>
                <li>Performed market analysis of components and other competing products to improve our product’s design value.</li>
                <li>Reported on operational metrics, conducted data and business analysis and presented a summary of findings to higher management in a clear, concise, convincing, and actionable format.</li>
                </ul>
                </>
            ),
            skills: new Set(["Python", "Excel", "Cloud Firestore", "Bash", "CAN bus"])
        }
    }
]

const allResearch = allResearchInit.map((research) => {
    return { ...research,
            displayExpanded: false,
            accordionHandler: () => {}
    }
 });

export default allResearch;