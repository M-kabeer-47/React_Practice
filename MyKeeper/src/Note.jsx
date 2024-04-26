import "./index.css"
export default function Note(props){
    return(
        <>
        
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={()=>{
                props.removeNote(props.id)
            }}>DELETE</button>
        </div>
        
        
        
        </>
    )
}