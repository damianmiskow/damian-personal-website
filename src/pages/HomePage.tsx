import "./HomePage.css"
import { Header } from '../components/Header'

export function HomePage () {
    return (

        <>
        <Header/>
        <div className="home-page">
            <div className="welcome-message">Damian Miskow</div>
            <div className="welcome-message">Software Development</div>
        </div>
        
        </>
    )

}