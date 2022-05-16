import React from 'react';
import '../styles/landingpage.css'
import logo from '../assets/logo.png'

export default function LandingPage(props){
    const [goal, setGoal] = React.useState("Selecione sua meta de zaps!");
    const [deckChoice, setDeck] = React.useState("React");

    return(
        <div className='content landing'>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <select value={deckChoice} onChange={(e) => setDeck(e.target.value)}>
                <option value="React">React</option>
                <option value="Teste">Teste</option>
            </select>
            <button onClick={()=>props.start(goal,deckChoice)}>Iniciar Recall!!</button>
        </div>
    );
}