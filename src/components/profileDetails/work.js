import React from "react";


const allWorkExperienceInit = [
    {
        header: {
            name: "American Foundation for the Blind",
            title: "Digital Accessibility Intern",
            time: "Jun '24 - Present",
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
            name: "Iowa State University",
            title: "Web and UX Content Asst",
            time: "Aug '22 - Present",
            domains: new Set(["Data Analytics", "UI/UX", "Front-end", "Content Writing", "Content Management", "Digital Accessibility"])
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
                  <li>Analyze how users are using the websites, what pages they are visiting the most, how much time they are spending on our websites, which links they are clicking, etc. using Google Analytics.</li>
                  <li>Combined and validated data from multiple sources for better analysis. Also extracted 10 years of historical site usage data from Universal Analytics for identifying trends.</li>
                  <li>Resolved inconsistencies in data for the number of clicks for links. Two metrics were used (one was customized) and they reported different numbers. The issue was in JavaScript code. I fixed the issue to get clean data for analysis.</li>
                  <li>Analyzed the top 5 services used and improved the website design to reduce the number of steps and time spent for using them by 70% to significantly improve user experience.</li>
                  <li>Analyzed user's site usage behavior on which parts of websites they clicked the most. Unfortunately, data from 25% of users was missing. I then used innovative analytics with image processing to get the missing data to get better insights and improved the design of those areas for increased user satisfaction.</li>
                  <li>Analyzed the top 10 files downloaded from each of 8 websites (65,000 yearly downloads) and modified them to ensure people with disabilities such as blindness can access those files using screen readers.</li>
                  <li>Analyzed the top accessibility issues in documents, generated reports, and set up and documented quick remediation workflows.</li>
                </ul>
                </>
            ),
            skills: new Set(["Google Analytics", "Python", "Excel", "HTML/CSS", "JavaScript", "Drupal", "Acrobat Pro"])
        }
    },
    {
        header: {
            name: "John Deere ISG (Contractor)",
            title: "Software Engineer II",
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
                </ul>
                </>
            ),
            skills: new Set(["C/C++", "Python", "OpenCV", "Docker", "CAN bus", "Bash"])
        }
    },
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
