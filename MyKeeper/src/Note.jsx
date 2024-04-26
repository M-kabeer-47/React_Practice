import { useContext } from "react"
import "./index.css"
import {Notes} from "./contextAPI.jsx"
export default function Note(props){
    const {deleteItem} = useContext(Notes)
    return(
        <>
        
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={()=>{
                deleteItem(props.id)
            }}>DELETE</button>
        </div>
        
        
        
        </>
    )
}