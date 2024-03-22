import "./styles.css";
export default function Card(props){
    return(
        <>
         <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.label}</span>
          </dt>
          <dd>
            {props.dd}
          </dd>
          </div>
        </>
    )
}