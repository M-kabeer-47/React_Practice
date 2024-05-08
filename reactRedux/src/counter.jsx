import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/states/counter"

export default function Counter(){
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
        <div className="container" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px"
        }}>
        <h1>{count}</h1>
        <div className="buttons" style={{
            display: "flex",
            flexDirection: "row"
            ,gap: "15px"
        }}>
               <button onClick={()=>{
                dispatch(increment())
               }}>Increment</button>
        <button onClick={()=>{
            dispatch(decrement())
        }}>Decrement</button>
        </div>
        </div>
        
       
     
        </>
    )
}