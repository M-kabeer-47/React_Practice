import { useContext, useState } from "react"
import {Notes} from "./contextAPI.jsx"
export default function CreateCard(props){
    const {addItem}= useContext(Notes)
    return(
        <>
        <div className="container">
        <div className="card">
            <input name="title" type="text" placeholder="Title" onChange={props.onChange} />
            <textarea name="content" id="" rows="3" placeholder="Take a note.." onChange={props.onChange}></textarea>
            <button onClick={addItem}>Add</button>
        </div>
        </div>
        </>
    )

}

