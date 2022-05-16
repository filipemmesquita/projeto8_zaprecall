import '../styles/footer.css';
import Party from '../assets/party.png'
import Sad from '../assets/sad.png'



export default function Footer(props){
    function ConclusionCheck(){
        if(props.results.length===props.questionsAmount){
            let fail=false;
            props.results.map(result => {if(result=="wrong"){fail=true;}});

            if (fail==false){
                return (
                    <>
                        
                        <h2><img src={Party} alt="festa" /><bold>Parabéns!</bold></h2>
                        <h2>Você não esqueceu de nenhum flashcard!</h2>
                    </>
                );
            }
            if(fail==true){
                return (
                    <>
                        <h2> <img src={Sad} alt="triste" /><bold>Putz...</bold></h2>
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