import React from "react";


const allWorkExperienceInit = [
    {
        header: {
            name: "Iowa State University",
            title: "Web and UX Content Asst",
            time: "Sep '22 - Feb '26",
            domains: new Set(["Data Analytics", "UI/UX", "Front-end", "Back-end", "Data Engineering", "Database Management", "Content Writing", "Content Management", "Digital Accessibility"])
        },
        body: {
            description: (
                <>
                <h4>Main Project</h4>
                <p>Website Analytics and Redesign</p>
                <h4>Goal</h4>
                <p>Analyze website traffic and optimize design with focus on enhanced user experience and continuous improvement.</p>
                <h4>Tasks</h4>
                <ul className="list-disc ps-2">
                    <li>Organized focus groups and user experience surveys and generated user sentiment and engagement reports.</li>
                    <li>Conducted meetings for website redesign project management efforts between department heads of cross-functional teams including IT, Data Services, Digital Collections and more.</li>
                </ul>
                <h4>Projects</h4>
                <ul className="list-disc ps-2">
                    <li>Utilized Google Analytics (GA4) to perform in-depth analysis of user behavior, including page visits, time spent on pages, click patterns, and more. Provided actionable recommendations to optimize website engagement and enhance user experience.</li>
                    <li>Extracted 10 years of historical site usage data from Universal Analytics, transformed it using Python, and loaded it on PostgreSQL database.</li>
                    <li>Optimized ETL workflows leading to 70% improvement in the accuracy and efficiency of prescriptive analytics for site performance.</li>
                    <li>Developed ReactJS Front-end with Axios for API Calls and Chart.js for historical site usage analytics dashboard by creating reusable and maintainable component structures and RESTful JSON APIs in Python using FastAPI with SQL queries to PostgreSQL database.</li>
                    <li>Utilized advanced ReactJS state management, component lifecycle, and React hooks and designed UI/UX with responsive design.</li>
                    <li>Experience in embedding Chart.js in React components to build dynamic and interactive charting interfaces.</li>
                    <li>Developed complex analytics dashboards using React.js and Chart.js for visualizing business data in real-time.</li>
                    <li>Designed responsive and adaptive chart components using Chart.js within React.js to cater to different screen sizes and resolutions.</li>
                    <li>Skilled in customizing Chart.js options, such as changing chart styles, animations, axes, and tooltips to meet user requirements.</li>
                    <li>Optimized the performance of Chart.js charts in React applications by using techniques like lazy loading and memoization.</li>
                    <li>Implemented real-time updates for charts using WebSockets or other streaming data techniques within React.js.</li>
                    <li>Experience in manipulating and transforming large datasets for chart rendering, such as handling time-series data, aggregated data, or multi-dimensional datasets.</li>
                    <li>Leveraged state management tools like Redux or React’s built-in hooks to manage the state of charts and other UI components.</li>
                    <li>Developed interactive chart components with Chart.js, such as zooming, panning, and drill-down functionalities.</li>
                    <li>Implemented a wide range of Chart.js types, including line charts, bar charts, pie charts, doughnut charts, and radar charts, depending on business needs.</li>
                    <li>•	Experience writing unit tests and integration tests for Chart.js components in React.js applications using Jest, Enzyme, or React Testing Library.</li>
                    <li>Documented architectural decisions, design patterns, and code standards and maintained up-to-date documentation for the development process and application structure.</li>
                    <li>Addressed technical challenges and provided solutions to complex problems and identified and addressed performance bottlenecks.</li>
                    <li>Diagnosed and resolved data inconsistencies related to link clicks, caused by discrepancies in JavaScript code. Cleaned data to ensure accurate analysis and reliable prescriptive recommendations.</li>
                    <li>Conducted a prescriptive analysis of the top services used on the website, leading to a UI/UX redesign that reduced the number of steps and time required by 70%, significantly enhancing user experience.</li>
                    <li>Analyzed user behavior on high-click areas of the website. Addressed missing data from 25% of users by employing innovative image processing techniques using Python, enabling more accurate prescriptive insights to optimize those website sections.</li>
                    <li>Prototyped multiple web page designs using HTML and CSS for enhanced UI/UX and translated the wireframes into fully functional web pages.</li>
                    <li>Automated cleaning of HTML content for obsolete tags, unnecessary tags, missing tags, extra spaces, and more, using Python HTML Parser scripts.</li>
                    <li>Created 20% of the web pages using Drupal with responsive, accessible, and appealing UI/UX designs and assisted others with 80% of the pages.</li>
                    <li>Implemented automated OCR solution using Python to scan and extract text from images to generate documents and maintain records.</li>
                    <li>Performed a detailed analysis of the top files downloaded across 8 websites (65,000 yearly downloads) and remediated them for accessibility.</li>
                </ul>
                </>
            ),
            skills: new Set(["Google Analytics", "Python", "Excel", "SQL", "PostgreSQL", "FastAPI", "HTML/CSS", "JavaScript", "React", "Redux", "Chart.js", "Axios", "Jest", "Drupal", "Acrobat Pro"])
        }
    },
    {
        header: {
            name: "American Foundation for the Blind",
            title: "Digital Accessibility Intern",
            time: "Jun '24 - Aug '24",
            domains: new Set(["Digital Accessibility", "UI/UX", "Accessibility Testing"])
        },
        body: {
            description: (
                <>
                <h4>Actions</h4>
                <ul className="list-disc ps-2">
                  <li>Engaged with foundational coursework to learn principles of digital inclusion in design and development, completing all assigned modules, practice activities, and assessments and attending all meetings and workshops.</li>
                  <li>Collaborated with the assigned mentor in order to develop digital inclusion skills through practice with Assistive Technology (AT) and accessibility and usability project-based assignments.</li>
                  <li>Participated in usability analysis activities through pair testing activities, including learning to provide guidance and feedback to the assigned partner tester and compile test results and data.</li>
                </ul>
                </>
            ),
            skills: new Set(["NVDA"])
        }
    },
    {
        header: {
            name: "John Deere ISG (Contractor)",
            title: "Software Engineer III",
            time: "Sep '19 - Aug '22",
            domains: new Set(["Machine Vision", "Image Processing", "IoT", "Sensor Fusion", "Embedded Applications", "System Automation"])
        },
        body: {
            description: (
                <>
                <h4>Product</h4>
                <p>See & Spray Select: Embedded Application for automatic detection of weeds in agricultural field and targeted spray of herbicides to achieve 77% average herbicide savings and improved cost efficiency.</p>
                <h4>Accomplishments</h4>
                <ul className="list-disc  ps-2">
                    <li>Developed software application for sprayer machines with image processing pipelines for weed detection and spraying in C/C++ and implemented system automation with Bash.</li>
                    <li>Led design and development of features such as localized spraying near field edges to achieve cost savings by 5%, convenient system log extraction from the display to speed up defect reporting and resolution by 50% and contributed to features for cutting down cost by 50% by reducing number of image processing hardware.</li>
                    <li>I was appointed as Tech Lead for Software Reprogramming and led my team to successfully resolve a critical failure that prevented software updates on 50% of the sprayers.</li>
                    <li>Resolved 25% of total defects, including 15% of major defects, filed during system level and field testing (2nd highest in the team of 8 developers) over 6 software releases (3 for all customers and 3 for co-op customers) within 18 months.</li>
                    <li>Improved performance of Perception Vision System testing through scalable and parallel computation, thereby reducing verification time from 2 days to 6 hours.</li>
                    <li>Managed creation and deployment of automatic tracker that made software code review process faster by 20%.</li>
                    <li>Supervised the integration of new features and defect fixes in our product and managed software release cycles.</li>
                    <li>Rendered data in custom formats (e.g., currency, percentages, or scientific notation) within Chart.js for more meaningful visual representation.</li>
                    <li>Preprocessed and normalized incoming data from multiple sources before feeding it to Chart.js to ensure accurate visualizations.</li>
                    <li>Implemented lazy loading for Chart.js components within React.js to improve initial load times and reduce resource consumption.</li>
                    <li>Worked with TypeScript in React.js applications, ensuring type safety when interacting with Chart.js for more reliable and maintainable code.</li>
                    <li>Managed Chart.js version updates within React.js projects, ensuring compatibility and leveraging new features while avoiding breaking changes.</li>
                    <li>Connected Chart.js charts in React.js with third-party analytics tools like Google Analytics or Mixpanel to track user interactions and chart engagement.</li>
                </ul>
                </>
            ),
            skills: new Set(["C/C++", "Python", "OpenCV", "Docker", "CAN bus", "Bash", "TypeScript", "React", "Chart.js"])
        }
    },
    // {
    //     header: {
    //         name: "Creative Web Solutions, Client: Acme Corp",
    //         title: "UI/UX Designer & Business Analyst",
    //         time: "Jan '18 - July '19",
    //         domains: new Set(["UI/UX", "Data Analytics", "Front-end"])
    //     },
    //     body: {
    //         description: (
    //             <>
    //             <h4>Responsibilities</h4>
    //             <ul className="list-disc  ps-2">
    //             <li>Redesigned Acme Corp’s B2B e-commerce portal, resulting in a 15% increase in overall sales and a 50% decrease in bounce rates.</li>
    //             <li>Conducted extensive user research, including surveys and interviews, to understand customer pain points and design more intuitive workflows.</li>
    //             <li>Created wireframes, prototypes, and interactive mockups using Balsamiq and Figma, ensuring alignment with client’s branding and user expectations.</li>
    //             <li>Worked with cross-functional teams to implement design improvements, focusing on UX optimization and conversion rate improvements.</li>
    //             <li>Assisted in the integration of Google Analytics for in-depth tracking of customer journeys and website performance.</li>
    //             <li>Collaborated with the marketing team to develop A/B tests and refine call-to-action (CTA) placement, increasing click-through rates by 20%.</li>
    //             <li>Engaged in daily maintenance and content updates via online CMS.</li>
    //             <li>Also leveraged superior creative design skills to produce other marketing collateral such as posters and flyers for these nonprofit organizations.</li>
    //             <li>Senior UX/UI designer in leading financial firm’s Alternative Asset Management department.</li>
    //             <li>Works simultaneously for 4 large-scale complex financial desktop/web applications from scratch.</li>
    //             <li>Plans, conducts user interviews and research, wireframes, and designs the product according to the business requirements in both function and visual design—from branding, logo, icon, and color, to typography and data visualization.</li>
    //             <li>Leveraged SQL to query customer and transactional data, providing business analytics reports to help stakeholders understand key metrics.</li>
    //             <li>Developed data visualizations and KPI dashboards in Power BI, allowing for real-time tracking of sales and marketing performance.</li>
    //             <li>Facilitated stakeholder workshops to gather feedback on the design and iterate on solutions for future releases.</li>
    //             <li>Managed the end-to-end UX design lifecycle, from initial ideation to testing and implementation, ensuring that all deliverables met the client’s needs.</li>
    //             <li>Collaborated with the development team to ensure smooth handoff and translation of designs into fully functional web components.</li>
    //             <li>Created training documentation and conducted sessions with internal teams to educate them on the new platform's functionalities and benefits.</li>
    //             </ul>
    //             </>
    //         ),
    //         skills: new Set(["Balsamiq","Figma","Google Analytics", "SQL", "Power BI"])
    //     }
    // },
    // {
    //     header: {
    //         name: "Digital Innovations, Client: Delta Inc.",
    //         title: "Web Developer & Data Analyst",
    //         time: "Jun '15 - Dec '17",
    //         domains: new Set(["UI/UX", "Data Analytics", "Front-end"])
    //     },
    //     body: {
    //         description: (
    //             <>
    //             <h4>Responsibilities</h4>
    //             <ul className="list-disc  ps-2">
    //             <li>Assisted in developing front-end and back-end web applications for Delta Inc., primarily focusing on HTML5, CSS3, and JavaScript for the front-end.</li>
    //             <li>Helped design and maintain databases using MySQL, ensuring data integrity and implementing efficient queries for optimal performance.</li>
    //             <li>Built basic business intelligence reports in Excel, utilizing pivot tables and VLOOKUPs to track customer trends and analyze sales data.</li>
    //             <li>Collaborated with senior developers to integrate RESTful APIs into the system, enabling seamless data exchange between different applications.</li>
    //             <li>Assisted in the automation of business processes using SQL and Python scripts, reducing manual reporting time by 40%.</li>
    //             <li>Participated in design reviews and team meetings, contributing ideas and insights for improving system performance and user experience.</li>
    //             <li>Analyzed requests or requirements for application patches or upgrades to determine the impact on business and integrated systems.</li>
    //             <li>Understanding the business process and in writing and executing Test Plans, Test Cases, and Test Scripts.</li>
    //             <li>Had scrum calls with the development and testing teams to make sure captured requirements were developed and tested as per the requirements of the business.</li>
    //             <li>Helped to develop test strategies, test cases, test plans, defect reports, Traceability Matrices and test environments and managed the testing process, bug reporting, and analysis of test results.</li>
    //             <li>Tracked the progress of system testing, and provided a daily status report to the Test Manager.</li>
    //             <li>Used Test Director to house all test documentation and report/track all issues and defects.</li>
    //             <li>Involved in gathering business requirements from the end users and management.</li>
    //             <li>Analyzed Requirements and created Use Cases, Use Case Diagrams, and Sequence Diagrams using Rose.</li>
    //             <li>Developed interactive dashboards for sales teams using Tableau, providing key insights into lead conversions and customer retention.</li>
    //             <li>Conducted end-user training sessions to familiarize teams with new tools and workflows, ensuring smooth transitions and system adoption.</li>
    //             <li>Gained experience in testing and debugging, identifying and resolving issues in both the front-end and back-end components of the applications.</li>
    //             <li>Supported database migration efforts, helping to transfer data from legacy systems to modern databases with minimal downtime.</li>
    //             <li>Worked closely with the project management team to ensure that all tasks were completed on time and in line with client expectations.</li>
    //             <li>Improved data security by implementing database access controls and ensuring compliance with industry best practices.</li>
    //             </ul>
    //             </>
    //         ),
    //         skills: new Set(["HTML/CSS","JavaScript","SQL","Python","Tableau","Excel"])
    //     }
    // },
    {
        header: {
            name: "Iowa State University",
            title: "Teaching Assistant",
            time: "Jan '18 - May '19",
            domains: new Set(["Mentorship"])
        },
        body: {
            description: (
                <>
                <h4>Responsibilities</h4>
                <ul className="list-disc  ps-2">
                    <li>Guide students with software design optimizations and assisted them by troubleshooting hardware/software issues.</li>
                    <li>Instructor for lab sessions for C programming and processor design on ModelSim and proctored and graded exams.</li>
                </ul>
                </>
            ),
            skills: new Set(["C/C++"])
        }
    }
];

const allWorkExperience = allWorkExperienceInit.map((work) => {
    return { ...work,
            displayExpanded: false,
            accordionHandler: () => {}
    }
 });

export default allWorkExperience;
