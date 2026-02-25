import "./Header.css"
import LinkedInLogo from "../assets/icons/linked-in-icon.svg"
import GitHubLogo from "../assets/icons/github-icon.png"
import { NavLink } from "react-router"

export function Header() {
    return (
        <div className="header">
            <div className="left-section">

                <a
                href="https://www.linkedin.com/in/damian-miskow-7b0ba9222"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img className="icon" src = {LinkedInLogo}></img>
                </a>

                <a
                href="https://github.com/damianmiskow"
                target="_blank"
                rel="noopener noreferrer"                
                >
                <img className="icon" src = {GitHubLogo}></img>
                </a>
            </div>
                <div className="middle-section">
                    <NavLink to="/" 
                    className= {({isActive}) =>
                    isActive? "link-element active-link": "link-element"} 
                    >Home</NavLink>

                    <div className="divider"></div>

                    <NavLink to="/about" 
                    className= {({isActive}) =>
                    isActive? "link-element active-link": "link-element"} 
                    >About</NavLink>

                    <div className="divider"></div>

                    <NavLink to="/contact" 
                    className= {({isActive}) =>
                    isActive? "link-element active-link": "link-element"} 
                    >Contact</NavLink>

                    <div className="divider"></div>

                    <NavLink to="/projects" 
                    className= {({isActive}) =>
                    isActive? "link-element active-link": "link-element"} 
                    >Projects</NavLink>

                </div>
            <div className="right-section">
                <button className="resume-button">
                    Resume
                </button>
            </div>
        </div>
    )
}