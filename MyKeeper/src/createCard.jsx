import { useState } from "react"
export default function CreateCard(props){
    return(
        <>
        <div className="container">
        <div className="card">
            <input name="title" type="text" placeholder="Title" onChange={props.onChange}/>
            <textarea name="content" id="" rows="3" placeholder="Take a note.." onChange={props.onChange}></textarea>
            <button onClick={props.Add}>Add</button>
        </div>
        </div>
        </>
    )

}

