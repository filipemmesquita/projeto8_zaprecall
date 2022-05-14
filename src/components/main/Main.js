
import logo from '../assets/logo.png'
import Card from './Card'

export default function Main(){

    return(
        <div className='content'>
            <div className='logotipo'>
                <img src={logo} alt="logo"/><h1>ZapRecall</h1>
            </div>
            <Card num="1" question="O que é JSX?" answer="Uma extenção de linguagem do JavaScript" />
            <Card num="2" question="O React é __ " answer="Uma biblioteca JavaScript para construção de interfaces" />
            <Card num="3" question="Componentes devem iniciar com __ " answer="letra maiúscula" />
            <Card num="4" question="Podemos colocar __ dentro do JSX" answer="expressões" />
        </div>
    );
}