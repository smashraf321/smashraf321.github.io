import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import
{
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopBar = () =>
{
    return (
        <div className="text-zinc-100">
            <h1 className="p-4">Ashraf Shaikh</h1>
            <a
            title="Source code for projects"
            href="https://github.com/smashraf321"
            target="_blank"
            rel="noreferrer"
            //className="p-1"
            >
                <FontAwesomeIcon
                icon={faGithub}
                color="white"
                //mask={faSquareFull}
                //className="hover:text-zinc-800 hover:bg-gradient-to-r from-indigo-500 to-blue-600 hover:animate-wiggle"
                className="p-1 hover:text-indigo-400 hover:animate-wiggle"
                />
            </a>
            <a
            title="LinkedIn profile for professional networking"
            href="https://www.linkedin.com/in/ashrafshaikhmohammed"
            target="_blank"
            rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faLinkedin}
                color="rgb(14 165 233)"
                className="p-1 hover:text-orange-500 hover:animate-wiggle"
                />
            </a>
            <a
            title="Contact through email"
            href="mailto:ashraf@iastate.edu"
            target="_blank"
            rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faEnvelope}
                color="#0ea5e9"
                className="p-1 hover:text-white hover:animate-wiggle"
                />
            </a>
        </div>
    );
};

export default TopBar;