import '../styles/cards.css'
import React from 'react';
import Arrow from '../assets/setinha.png'

export default function Card(props){
    const [isOpened, setOpened] = React.useState(false);
    function open(){
        setOpened(true);
    }
    return(
        <>
            {(isOpened===false) ? <Label num={props.num} open={open}/> : <Question question={props.question} answer={props.answer} />}
        </>
    );
}

function Label(props){
    return (
        <div className="card" onClick={props.open}>
            <p>Pergunta {props.num} </p> <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}
function Question(props){
    const [isTurned, setTurned] = React.useState(false);
    function turn(){
        setTurned(true);
    }
    return (
        <>
        {(isTurned===false) ? <Text num={props.num} turn={turn} question={props.question} /> : <Answer answer={props.answer} />}
        </>
    );
}
function Text(props){

    return (

        <div className='question'>
                <p>{props.question}</p>
                <img src={Arrow} onClick={props.turn} />
        </div>
    
    );
}
function Answer(props){
    return(
        <div className='question'>
                <p>{props.answer}</p>
                <div>
                    <button className='wrong'>Não lembrei</button>
                    <button className='halfRight'>Quase não lembrei</button>
                    <button className='right'>Zap!</button>
                </div>
        </div>
    
    );

}