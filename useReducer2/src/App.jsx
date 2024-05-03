  import { useReducer } from "react"
  const Action = {
    Increment: "increment",
    Decrement: "decrement",
    Update: "update",
    Display: "display"
  }
  export default function App(){
    function reducer(state,action){
      let flag2 = !state.flag;
      switch(action.type){
        case Action.Increment:
          return {
            ...state,
            value: state.value+1,
          }
        case Action.Decrement:
          return {
            ...state,
            value: state.value-1,
          }
          
        case Action.Update:
          return {
            ...state,
            value: action.value,
          }
        case Action.Display:
          return{
            ...state,
            flag: flag2
          }
          
        default:
          return state
      }

    }
    const [number,dispatch] = useReducer(reducer,{
      value: 0,
      flag: false
    })
    function onChange(e){
      let {value} = e.target
      value !== "" ? value = parseInt(value) : 0; 
      if (value === 0) {
        e.target.value = ""; // Clear the input field
      }
      dispatch({type: Action.Update,
      value:value})
    }
    function handleSubmit(){
      dispatch({
        type: Action.Display,
        value: 0
      })
      setTimeout(()=>{
        dispatch({
          type:Action.Display,
          value: 0
        },3000)
      })

    }
    return(
      
      <>
      <div className="container">
        <div className="subcontainer">
        <button onClick={()=>{
          dispatch({type: Action.Decrement,
          value: 0})
        }}>-</button>
        <input type="number" placeholder="Enter a number" onChange={onChange} value={number.value}></input>
        <button onClick={()=>{
          dispatch({type: Action.Increment,
          value: 0})
        }}>+</button>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {number.flag && <h2>{number.value}</h2>}
      </div>
      </>
    )
  }