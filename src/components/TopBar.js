import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import
{
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import pageGreeting from './profileDetails/topBar';

// text-cyan-200
const TopBar = () =>
{
    const iconColor="rgb(199 210 254)"// "rgb(165 180 252)";
    return (
        <div className="pb-2 py-5 lg:px-5 ">
            <h1 className="me-8 text-center tracking-wide">{pageGreeting}</h1>
            <ul className="flex flex-wrap justify-center text-lg mt-4">
              <li className="mx-4">
              <a
               title="LinkedIn profile for professional networking"
               href="https://www.linkedin.com/in/ashrafshaikhmohammed"
               target="_blank"
               rel="noreferrer"
               >
                   <FontAwesomeIcon
                   icon={faLinkedin}
                   color={iconColor}
                   className="p-1 hover:text-violet-100 hover:animate-wiggle"
                   />
              </a>
              </li>
              <li className="mx-4">
              <a
               title="Source code for projects"
               href="https://github.com/smashraf321"
               target="_blank"
               rel="noreferrer"
               >
                   <FontAwesomeIcon
                   icon={faGithub}
                   color={iconColor}
                   //mask={faSquareFull}
                   //className="hover:text-zinc-800 hover:bg-gradient-to-r from-indigo-500 to-blue-600 hover:animate-wiggle"
                   className="p-1 hover:text-violet-100 hover:animate-wiggle"
                   />
              </a>
              </li>
              
              <li className="mx-4">
              <a
               title="Contact through email"
               href="mailto:ashraf@iastate.edu"
               target="_blank"
               rel="noreferrer"
               >
                   <FontAwesomeIcon
                   icon={faEnvelope}
                   color={iconColor}
                   className="p-1 hover:text-violet-100 hover:animate-wiggle"
                   />
              </a>
              </li>
            </ul>
        </div>
    );
};

export default TopBar;