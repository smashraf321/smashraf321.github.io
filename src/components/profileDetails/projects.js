var allProjectsInit = [
    {
        header: {
            name: "Portfolio",
            time: "Jul '24",
            domains: new Set(["Front-end", "UI/UX", "Web Development", "Digital Accessibility"])
        },
        body: {
            description: (
                <>
                <h4>Goal</h4>
                <p>Design an accessible portfolio website.</p>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                    <li>Developed a dynamic and efficient website by leveraging advanced React design patterns, thereby making the design extremely scalable, automated, and compatible across many platforms and browser versions.</li>
                    <li>Implemented an optimized filter feature, enabling users to view experiences based on selected skills while maintaining blazing fast performance.</li>
                    <li>Enhanced React state management, ensuring a seamless UI/UX design and reducing unnecessary re-renders for performance improvements.</li>
                    <li>Designed complex, accessible components with a focus on both functionality and visual appeal, adhering to best practices for inclusive design.</li>
                </ul>

                <p><br/>NOTE: This site gets constant updates as and when I get time.</p>
                </>
            ),
            skills: new Set(["React", "Tailwind", "JavaScript", "HTML/CSS", "NVDA"])
        }
    },
    {
        header: {
            name: "Data Job Market Analysis",
            time: "Jun '24",
            domains: new Set(["Data Analytics", "Data Engineering", "Database Management"])
        },
        body: {
            description: (
                <>
                <h4>Goal</h4>
                <p>Analyze trends in data job market</p>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                    <li>Developed and managed a PostgreSQL database by creating and loading data from CSV files, ensuring efficient data storage and retrieval.</li>
                    <li>Crafted advanced SQL queries utilizing Joins, Common Table Expressions (CTEs), and other complex operations to analyze and manipulate datasets.</li>
                    <li>Identified and analyzed key trends in the data job market, including high-paying and in-demand skills, and top-paying job roles, and more.</li>
                </ul>
                </>
            ),
            skills: new Set(["SQL", "PostgreSQL"])
        }
    },
    {
        header: {
            name: "Predictive modeling for residential sales",
            time: "Feb '24",
            domains: new Set(["AI/ML", "Data Science", "Data Analytics", "Data Visualization"])
        },
        body: {
            description: (
                <>
                <h4>Goal</h4>
                <p>Estimate residential sales prices in Ames using data gathered over the course of 150 years.</p>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                  <li>Performed extensive iterative statistical analysis in R using boxplots, scatterplots, and more, along with calculations for IQR, standard deviations, correlations and more, to identify factors driving the sales price, tracking outliers and anomalies and determining appropriate Machine Learning model and optimizing the model.</li>
                  <li>Used Random Forest Regression with feature engineering for robust prediction of sales price with RMSE of $35k for average price of $350,000.</li>
                </ul>
                </>
            ),
            skills: new Set(["R"])
        }
    },
    {
        header: {
            name: "Generative Model for traffic prediction",
            time: "Mar '23 - Apr '23",
            domains: new Set(["AI/ML", "Data Science", "Time Series Forecasting", "Data Visualization"])
        },
        body: {
            description: (
                <>
                <h4>Goal</h4>
                <p>Anticipate traffic at intersections to determine routes with least traffic for shorter commute time.</p>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                  <li>Improved data exploration and visualization in Python through rigorous data analysis and preprocessing such as data splicing and conversion for identifying patterns for correlation and seasonality for time series analysis.</li>
                  <li>Extracted hidden insights to design a Multi Classified Regression model that outperformed SARIMAX generative forecasting model by 20% for specific intersections.</li>
                  <li>Cross-validated predictive models including gradient boosting and finalized Multi Classified Regression model and SARIMAX for consistent performance of time series forecasting across intersections with average RMSE of 6 for an average of 50 vehicles per intersection.</li>
                </ul>
                </>
            ),
            skills: new Set(["Python"])
        }
    },
    {
        header: {
            name: "Flight Travel Insurance System",
            time: "Mar '21 - May '21",
            domains: new Set(["Blockchain", "Smart Contracts", "Distributed Systems"])
        },
        body: {
            description: (
                <>
                <h4>Goal</h4>
                <p>Develop a flight insurance system that allows the user to purchase flight insurance policies and file claims in case of weather-related delays and accidents.</p>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                  <li>Deployed Smart Contracts written in Solidity on the Ethereum blockchain with Metamask integration to verify claims using the provided weather data and pay indemnities to qualified passengers.</li>
                  <li>Automated claim verification and indemnity payments using real weather data through a Java based Desktop application that integrated with the Smart Contracts on the Ethereum blockchain.</li>
                </ul>
                </>
            ),
            skills: new Set(["Solidity", "Java"])
        }
    },
    {
        header: {
            name: "Asteroids",
            time: "Nov '18 - Dec '18",
            domains: new Set(["Game Development"])
        },
        body: {
            description: (
                <>
                <h4>Actions</h4>
                <ul className="list-disc ps-2">
                  <li>Redesigned the classic Asteroids 2D Space Shooter arcade game with Object Oriented Design and improved gameplay using SFML cross-platform software development library in C++.</li>
                  <li>Improved the game design logic with dynamic memory allocation for preventing performance slow-down at high scores, game crashes, and memory leaks (due to unexpected shutdown of the application).</li>
                </ul>
                </>
            ),
            skills: new Set(["C/C++", "SFML"])
        }
    },
    {
        header: {
            name: "ASCII Dungeon Crawler",
            time: "Sep '18 - Nov '18",
            domains: new Set(["Game Development"])
        },
        body: {
            description: (
                <>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                  <li>Designed ncurses based ASCII version of 2D Role Playing Game characterized by a Dungeon Crawl through procedurally generated levels with Object Oriented Paradigms in C and C++.</li>
                  <li>Integrated various interactive features into a functioning game with optimized memory management and programming techniques for entity handling and prevention of memory leaks.</li>
                  <li>Implemented various algorithms for game design process including Dijkstra's Algorithm for shortest path finding and Bresenham's Line Algorithm for Line of Sight between monsters and player character.</li>
                </ul>
                </>
            ),
            skills: new Set(["C/C++"])
        }
    },
    {
        header: {
            name: "Field Temperature Monitoring",
            time: "Mar '18 - May '18",
            domains: new Set(["IoT", "Embedded Applications", "Wireless Sensor Networks"])
        },
        body: {
            description: (
                <>
                <h4>Goal</h4>
                <p>Deploy a fully connected mesh network of Sky TelosB motes to conveniently monitor the average temperature of a large 2500 sq. m field.</p>
                <h4>Actions</h4>
                <ul className="list-disc  ps-2">
                  <li>Designed a dynamic algorithm for scalable and reconfigurable network to increase nodes for improved average computation without recalibration.</li>
                  <li>Increased the sensor range from 15m to 25m radius for broader average calculation and implemented to conveniently read temperature from your nearest mote as all motes reported same values.</li>
                </ul>
                </>
            ),
            skills: new Set(["C/C++"])
        }
    }
];

const allProjects = allProjectsInit.map((project) => {
    return { ...project,
            displayExpanded: false,
            accordionHandler: () => {}
    }
 });

export default allProjects;
