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
    // md:w-3/4 2xl:w-3/5
    <div className="w-full h-full min-h-screen bg-slate-800 sm:flex sm:justify-center 2xl:flex-none text-zinc-200 text-xs 2xl:text-sm">
      <div className="font-montserrat max-sm:max-w-[600px] md:min-w-[600px] md:w-[60%] 2xl:w-full 2xl:max-w-[1920px] 2xl:flex 2xl:justify-between ">
        <div className="px-1 ps-3 2xl:w-[40%] 2xl:max-w-[40%] pt-2 ">
          <TopBar/>
          <AboutMe/>
          <Skills/>
          <FilterExperience/>
        </div>
        <div className="max-2xl:mt-2 2xl:min-w-[600px] 2xl:w-[60%] 2xl:p-1 2xl:ps-2 2xl:max-h-screen 2xl:pt-2 2xl:overflow-y-auto">
          {React.createElement(React.Fragment, {}, ...ExperienceList)}
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

