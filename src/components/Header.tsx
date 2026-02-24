import "./Header.css"
import LinkedInLogo from "../assets/icons/linked-in-icon.svg"
import GitHubLogo from "../assets/icons/github-icon.png"

export function Header() {
    return (
        <div className="header">
            <div className="left-section">
                <img className="icon" src = {LinkedInLogo}></img>
                <img className="icon" src = {GitHubLogo}></img>
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
            <div className="right-section"></div>
        </div>
    )
}