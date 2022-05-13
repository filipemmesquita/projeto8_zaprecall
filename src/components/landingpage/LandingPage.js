import '../styles/landingpage.css'
import logo from '../assets/logo.png'

export default function LandingPage(){
    return(
        <div className='content'>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!!</button>
        </div>
    );
}