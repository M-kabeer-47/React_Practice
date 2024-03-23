import "./styles.css"
export default function Input(props){
    return(
        <>
        <input type={props.text} placeholder={props.placeHolder} />
        </>
    )
}