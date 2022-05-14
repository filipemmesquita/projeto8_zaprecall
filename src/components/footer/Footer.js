import '../styles/footer.css';

export default function Footer(props){
    return(
        <div className="footer">
            <p>{props.results.map(result =><span>{result}</span> )}</p>
        </div>
    )
};