import "./Header.css"
import LinkedInLogo from "../assets/icons/linked-in-icon.svg"
import GitHubLogo from "../assets/icons/github-icon.png"

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
                    <button>Home</button>
                    <div className="divider"></div>
                    <button>Projects</button>
                    <div className="divider"></div>
                    <button>About</button>
                    <div className="divider"></div>
                    <button>Contact</button>
                </div>
            <div className="right-section">
                <button className="resume-button">
                    Resume
                </button>
            </div>
        </div>
    )
}