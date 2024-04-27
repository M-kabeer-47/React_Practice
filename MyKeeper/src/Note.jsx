import { useContext } from "react"
import "./index.css"
import { notesContext } from "./context"

export default function Note(props){
    const {removeNote} = useContext(notesContext)
    return(
        <>
        
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={()=>{
                removeNote(props.id)
            }}>DELETE</button>
        </div>
        
        
        
        </>
    )
}