import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import TechnicalDetails from './components/TechnicalDetails';
import SkillCheckBoxButton from './components/SkillCheckBoxButton';
import Skills from './components/Skills';
import FilterExperience from './components/FilterExperience';
import Experience from './components/Experience';
import React from 'react';
import { experienceSelector } from './components/sharedData/globalStorage';


function App() {
  //return(<button disabled={false} onClick={()=>{console.log(`clicked`)}}>click me</button>)
  const ExperienceList = Object.keys(experienceSelector).map((experienceType) => {
    return (
        <Experience experienceType={experienceType}/>
    );
});

  return (//bg-gradient-to-r from-gray-500 to-blue-600
    // also h-screen messes with screen, shoiws background only on lil part
    // dark:bg-slate-800
    // bg-[url('../src/img/space_wallpaper.jpg')]
    // flex justify-center
    // md:w-3/4 xl:w-3/5
    <div className="w-full h-full min-h-screen bg-slate-800 sm:flex sm:justify-center lg:flex-none text-zinc-200 text-xs">
      <div className="font-montserrat sm:max-w-[600px] md:min-w-[600px] md:w-[70%] lg:w-full lg:max-w-full lg:flex lg:justify-between ">
        <div className="px-1 ps-3 lg:w-[47%] lg:max-w-[47%] pt-2">
          <TopBar/>
          <AboutMe/>
          <Skills/>
          <FilterExperience/>
        </div>
        <div className="lg:min-w-[600px] lg:w-[53%] lg:p-1 lg:ps-2 lg:max-h-screen lg:overflow-y-scroll lg:pt-2">
          {React.createElement(React.Fragment, {}, ...ExperienceList)}
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

