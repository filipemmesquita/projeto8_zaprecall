import '../styles/landingpage.css'
import logo from '../assets/logo.png'

export default function LandingPage(props){
    return(
        <div className='content landing'>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={props.start}>Iniciar Recall!!</button>
        </div>
    );
}