import React from 'react';
import LandingPage from './components/landingpage/LandingPage'
import Main from './components/main/Main';
import './components/styles/general.css'

export default function App(){
    const [isStarted, setStarted] = React.useState(false);
    const [order, setOrder] = React.useState([]);
    const [deck, setDeck]=React.useState({});
    const [goal, setGoal]=React.useState({});

    let questions=[];
    let answers=[];
    const newOrder=[];
    function start(goalChoice,deckChoice){
        if(deckChoice=="React"){
            questions=['O que é JSX?','O React é __ ','Componentes devem iniciar com __ ','Podemos colocar __ dentro do JSX','O ReactDOM nos ajuda __','Usamos o npm para __ ','Usamos props para __','Usamos estado (state) para __'];
            answers=['Uma extensão de linguagem do JavaScript','uma biblioteca JavaScript para construção de interfaces','letra maiúscula','expressões','interagindo com a DOM para colocar componentes React na mesma','gerenciar os pacotes necessários e suas dependências','passar diferentes informações para componentes','dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'];
        }
        if(deckChoice=="Teste"){
            questions=["p1","p2","p3","p4"]
            answers=["r1","r2","r3","r4"]
        }        

        setDeck({questions:questions,answers:answers})

        
        for(let x=0;x<questions.length;x++){
            newOrder.push(x);
        }
        
        newOrder.sort(() => Math.random() -0.5);

        setOrder(newOrder);
        console.log(newOrder);
        console.log(order);
        setGoal(goalChoice);
        setStarted(true);
    }
    
    
    


    return(
        <>
            {(isStarted===false) ? <LandingPage start={start} /> : <Main order={order} deck={deck} goal={goal} />}
        </>
    );
}