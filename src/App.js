import React from 'react';
import LandingPage from './components/landingpage/LandingPage'
import Main from './components/main/Main';
import './components/styles/general.css'

export default function App(){
    const [isStarted, setStarted] = React.useState(false);
    function start(){
        setStarted(true);
    }
    return(
        <>
            {(isStarted==false) ? <LandingPage start={start} /> : <Main />}
        </>
    );
}