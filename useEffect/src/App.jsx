import {  useState } from "react"
import Div from "../component.jsx"
export default function App(){
    const [toggle,updateToggle] = useState(false)
    function changeToggle(){
        updateToggle(!toggle)
    }
    function handleClick(){
        changeToggle()
    }
    return(
        <>
        <h2>Checking UseEffect hook</h2>
        <button onClick={handleClick}>Toggle</button>
        {toggle && <Div/>}
        </>
    )
}