import { useContext, useState } from "react"
import { notesContext } from "./context.jsx"
export default function CreateCard(props){
    const {addNote,note} = useContext(notesContext)
    
    return(
        <>
        <div className="container">
        <div className="card">
            <input name="title" type="text" placeholder="Title" onChange={props.onChange} value={note.title} />
            <textarea name="content" id="" rows="3" placeholder="Take a note.." onChange={props.onChange} value={note.content}></textarea>
            <button onClick={addNote}>Add</button>
        </div>
        </div>
        </>
    )

}

