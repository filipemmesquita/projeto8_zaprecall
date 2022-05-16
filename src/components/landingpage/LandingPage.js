import React from 'react';
import '../styles/landingpage.css'
import logo from '../assets/logo.png'

export default function LandingPage(props){
    const [goalChoice, setGoalChoice] = React.useState();
    const [deckChoice, setDeckChoice] = React.useState("");

    function startCheck(){
        if(goalChoice<=0){
            alert("Por favor insira um numero maior que zero!")
        }
        else if(deckChoice==""){
            alert("Por favor escolha um deck válido!")
        }
        else
        props.start(goalChoice,deckChoice);

    }

    return(
        <div className='content landing'>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <input type="text" value={goalChoice} onChange={(e) => setGoalChoice(e.target.value)} placeholder="Digite sua meta de zaps" />
            <br />
            <select value={deckChoice} onChange={(e) => setDeckChoice(e.target.value)}>
                <option value="" disabled selected hidden>Escolha seu deck!</option>
                <option value="React">React</option>
                <option value="Teste">Teste</option>
            </select>
            <button onClick={startCheck}>Iniciar Recall!!</button>
        </div>
    );
}