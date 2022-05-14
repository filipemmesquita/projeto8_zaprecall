import '../styles/cards.css';
import React from 'react';
import Arrow from '../assets/setinha.png';

export default function Card(props){
    const [isOpened, setOpened] = React.useState(false);
    const [answerState, setAnswerState] = React.useState('');
    function open(){
        setOpened(true);
    }
    function close(state){
        setOpened(false);
        setAnswerState(state);
        props.addResult(state);
    }
    return(
        <>
            {(isOpened===false) ? <Label num={props.num} open={open} answer={answerState} /> : <Question question={props.question} answer={props.answer} close={close} />}
        </>
    );
}

function Label(props){

    return (
        <div className="card" onClick={props.open}>
            <p className={props.answer}>Pergunta {props.num} </p> <ion-icon name="play-outline"></ion-icon>
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
        {(isTurned===false) ? <Text num={props.num} turn={turn} question={props.question} /> : <Answer answer={props.answer} close={props.close} />}
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
                    <button className='wrong' onClick={()=>props.close('wrong')} >Não lembrei</button>
                    <button className='halfRight' onClick={()=>props.close('halfRight')} >Quase não lembrei</button>
                    <button className='right' onClick={()=>props.close('right')} >Zap!</button>
                </div>
        </div>
    
    );
}