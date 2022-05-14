import React from 'react';
import logo from '../assets/logo.png'
import Card from './Card'
import Footer from '../footer/Footer'

export default function Main(){
let questions=['O que é JSX?','O React é __ ','Componentes devem iniciar com __ ','Podemos colocar __ dentro do JSX','O ReactDOM nos ajuda __','Usamos o npm para __ ','Usamos props para __','Usamos estado (state) para __'];
let answers=['Uma extensão de linguagem do JavaScript','uma biblioteca JavaScript para construção de interfaces','letra maiúscula','expressões','interagindo com a DOM para colocar componentes React na mesma','gerenciar os pacotes necessários e suas dependências','passar diferentes informações para componentes','dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'];
const deck1={questions:questions,answers:answers};
const deck2={};
const decks=[deck1,deck2];
const order=[1,2,3,4,5,6,7,8];
order.sort(() => Math.random() -0.5);
const [results, setResults] = React.useState([]);
function addResult(result){
    const newResults = [...results,result];
    setResults(newResults);
    console.log(results)
}
    return(
        <>
        <div className='content'>
            <div className='logotipo'>
                <img src={logo} alt="logo"/><h1>ZapRecall</h1>
            </div>
            <Card num="1" question={decks[0].questions[order[0]]} answer={decks[0].answers[order[0]]} addResult={addResult} />
            <Card num="2" question={decks[0].questions[order[1]]} answer={decks[0].answers[order[1]]} addResult={addResult} />
            <Card num="3" question={decks[0].questions[order[2]]} answer={decks[0].answers[order[2]]} addResult={addResult} />
            <Card num="4" question={decks[0].questions[order[3]]} answer={decks[0].answers[order[3]]} addResult={addResult} />
        </div>
        <Footer results={results} />
        </>
    );
}