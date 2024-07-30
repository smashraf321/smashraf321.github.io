import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import AppMain from './components/AppMain';
import TechnicalDetails from './components/TechnicalDetails';
import SkillCheckBoxButton from './components/SkillCheckBoxButton';
import Skills from './components/Skills';
import FilterExperience from './components/FilterExperience';
import Experience from './components/Experience';

// MAKE SURE FONT SIZE DECREASES WITH ZOOM

function App() {
  //return(<button disabled={false} onClick={()=>{console.log(`clicked`)}}>click me</button>)
  return (//bg-gradient-to-r from-gray-500 to-blue-600
    // also h-screen messes with screen, shoiws background only on lil part
    <div className="w-full h-full bg-zinc-400 dark:bg-slate-800 text-center">
      {/* <AppMain/> */}
      <TopBar/>
      <AboutMe/>
      <TechnicalDetails/>
      <AboutMe/>
      
    </div>
  );
}

export default App;

