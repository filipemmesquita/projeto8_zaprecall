import '../styles/footer.css';
import Party from '../assets/party.png'
import Sad from '../assets/sad.png'



export default function Footer(props){
    function ConclusionCheck(){
        if(props.results.length===props.questionsAmount){
            let zapCounter=0;
            props.results.map(result =>{if(result==="right"){zapCounter++}})

            if (zapCounter>=props.goal){
                return (
                    <>
                        
                        <h2><img src={Party} alt="festa" /><strong>Parabéns!</strong></h2>
                        <h2>Você bateu a sua meta!</h2>
                    </>
                );
            }
            if(zapCounter<props.goal){
                return (
                    <>
                        <h2> <img src={Sad} alt="triste" /><strong>Putz...</strong></h2>
                        <h2>Ainda faltam alguns... Mas Não desanime!</h2>
                    </>
                );
            }

        }
        return(
            <></>  
          );
    };
    return(
        <div className="footer">

            <ConclusionCheck />
            <h2>{props.results.length}/{props.questionsAmount} Concluídos</h2>
            <br />
            <div>
            {props.results.map(result =><Tick result={result} />)}
            </div>
        </div>
    )
};
function Tick(props){
    if(props.result==="right"){
        return (
        <div className={props.result}>
            <ion-icon name="checkmark-circle"></ion-icon>
        </div>);
    }

    if(props.result==="wrong"){
        return (
            <div className={props.result}>
                <ion-icon name="close-circle"></ion-icon>
            </div>);
    }
    if(props.result==="halfRight"){
           
        return (
            <div className={props.result}>
                <ion-icon name="help-circle"></ion-icon>
            </div>);
    }

}