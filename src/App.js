import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import SectionBase from './components/SectionBase';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App w-full h-screen bg-zinc-800">
      <TopBar/>
      <SectionBase
      sectionTitle="About Me"
      sectionContent={<AboutMe/>}/>
      <SectionBase
      sectionTitle="About Me"
      sectionContent={<AboutMe/>}/>
    </div>
  );
}

export default App;

