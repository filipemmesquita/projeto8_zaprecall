import React from 'react';
import logo from '../assets/logo.png'
import Card from './Card'
import Footer from '../footer/Footer'

export default function Main(props){

const [results, setResults] = React.useState([]);
function addResult(result){
    const newResults = [...results,result];
    setResults(newResults);
    console.log(results)
}
function addCard(currentOrder, index){
    return(
    <Card num={index+1} question={props.deck.questions[props.order[currentOrder]]} answer={props.deck.answers[props.order[currentOrder]]} addResult={addResult} />
    );
}
    return(
        <>
        <div className='content'>
            <div className='logotipo'>
                <img src={logo} alt="logo"/><h1>ZapRecall</h1>
            </div>
            {props.order.map(addCard)}
        </div>
        <Footer results={results} questionsAmount={props.order.length} goal={props.goal} />
        </>
    );
}
