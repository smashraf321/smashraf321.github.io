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
        <header className="text-zinc-100">
            <h1 className="p-4">Ashraf Shaikh</h1>
            <p>Email: ashraf@iastate.edu</p>
            <a
            title="Source code for projects"
            href="https://github.com/smashraf321"
            target="_blank"
            rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faGithub}
                color="#0ea5e9"
                className="p-1 hover:text-white"
                />
            </a>
            <a
            title="Professional networking profile"
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
            title="Source code for projects"
            href="mailto:ashraf@iastate.edu"
            target="_blank"
            rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faEnvelope}
                color="#0ea5e9"
                className="p-1 hover:text-white hover:animate-pulse"
                />
            </a>
        </header>
    );
};

export default TopBar;