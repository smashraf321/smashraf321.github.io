import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pageGreeting, socials } from './profileDetails/topBar';
import
{
    faLinkedin,
    faGithub,
    faXTwitter,
    faYoutube,
    faTwitch,
    faInstagram,
    faTiktok,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const SocialLink = ({linkDescription, socialUrl, socialIcon}) =>
{
    const iconColor="rgb(199 210 254)"// "rgb(165 180 252)";
    return (
        <a
               title={linkDescription}
               href={socialUrl}
               target="_blank"
               rel="noreferrer"
               >
                   <FontAwesomeIcon
                   icon={socialIcon}
                   color={iconColor}
                   //mask={faSquareFull}
                   //className="hover:text-zinc-800 hover:bg-gradient-to-r from-indigo-500 to-blue-600 hover:animate-wiggle"
                   className="p-1 hover:text-violet-100 hover:animate-wiggle"
                   />
              </a>
    )
}

// text-cyan-200
const TopBar = () =>
{
    const socialIcons =
    {
        LinkedIn : faLinkedin,
        GitHub: faGithub,
        Email: faEnvelope,
        X: faXTwitter,
        YouTube: faYoutube,
        Twitch: faTwitch,
        Instagram: faInstagram,
        TikTok: faTiktok,
        Facebook: faFacebook
    }

    const socialsList = Object.entries(socials).map((social) =>
    {
        return (
            <li className="mx-4">
                 <SocialLink
                  linkDescription={social[1]["linkDesription"]}
                  socialUrl={social[1]["url"]}
                  socialIcon={socialIcons[social[0]]} /> 
            </li>
        )
    }
    )
    
    return (
        <div className="pb-2 py-5 2xl:px-5 ">
            <h1 className="me-8 text-center tracking-wide">{pageGreeting}</h1>
            <ul className="flex flex-wrap justify-center text-lg 2xl:text-xl mt-4">
              {React.createElement(React.Fragment, {}, ...socialsList)}
            </ul>
        </div>
    );
};

export default TopBar;