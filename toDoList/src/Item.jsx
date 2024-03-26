import { useState } from "react"

export default function Item(props){
    

    return(
        <li onClick={()=>{
            props.DeleteTask(props.id)
        }}>{props.text}</li>
    )
}