import "./styles.css"
export default function Input(props){
    return(
        <>
        <input type={props.type} placeholder={props.placeHolder} />
        </>
    )
}