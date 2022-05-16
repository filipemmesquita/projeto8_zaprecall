import React from 'react';
import LandingPage from './components/landingpage/LandingPage'
import Main from './components/main/Main';
import './components/styles/general.css'

export default function App(){
    const [isStarted, setStarted] = React.useState(false);
    function start(){
        setStarted(true);
    }
    let questions=['O que é JSX?','O React é __ ','Componentes devem iniciar com __ ','Podemos colocar __ dentro do JSX','O ReactDOM nos ajuda __','Usamos o npm para __ ','Usamos props para __','Usamos estado (state) para __'];
    let answers=['Uma extensão de linguagem do JavaScript','uma biblioteca JavaScript para construção de interfaces','letra maiúscula','expressões','interagindo com a DOM para colocar componentes React na mesma','gerenciar os pacotes necessários e suas dependências','passar diferentes informações para componentes','dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'];
    const deck1={questions:questions,answers:answers};
    const deck2={};
    const decks=[deck1,deck2];
    const order=[];
    for(let x=0;x<questions.length;x++){
        order.push(x);
    }
    console.log(order);
    order.sort(() => Math.random() -0.5);
    console.log(order);

    return(
        <>
            {(isStarted===false) ? <LandingPage start={start} /> : <Main order={order} deck={deck1} />}
        </>
    );
}