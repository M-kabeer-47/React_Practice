import { useEffect } from "react"

export default function Div(){
    useEffect(()=>{
        console.log("Hello");
        return(()=>{
            console.log("Gaya")
        })
    },[])
    return(
        <>
        <div className="box">
            <h3>I am a box</h3>
        </div>
        </>
    )
}