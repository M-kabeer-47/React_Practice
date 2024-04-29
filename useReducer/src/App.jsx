import { useReducer } from "react"


export default function App(){
  function reducer(state,action){
    switch(action.type){
      case "increment":
        return{
          count: state.count+1
        }
        case "decrement":
        return{
          count: state.count-1
        }
        default:
          return state;
          
        
    }
    
    }
  const [state,dispatch] = useReducer(reducer,{count: 0})
 
return(
    <>
    <div className="container">
      <button onClick={()=>{
        dispatch({type:"increment"})
      }}>+</button>
      <h2>{state.count}</h2>
      <button onClick={()=>{
        dispatch({type:"decrement"})
      }}>-</button>
    </div>
    </>
  )
}
