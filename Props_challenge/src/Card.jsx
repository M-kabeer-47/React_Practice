import "./index.css";
export default function Card(props){
    return(
        <>
        <div className="wrapper" style={{
            backgroundColor: props.bgColor,
            display: "flex",
            flexDirection: "column",
            minHeight: "500px", 
            maxWidth: "350px",
            width: "100%",
        }

        }>
            <div className="svg">
            {props.svg}
            </div>
        
        <h1>{props.car}</h1>
        <p>{props.detail}</p>
        <button style={
            {
                color: props.color
            }
        }>Learn More</button>        
        </div>

        </>
    )
}