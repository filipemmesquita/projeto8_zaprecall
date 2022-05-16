import '../styles/footer.css';

export default function Footer(props){
    return(
        <div className="footer">
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