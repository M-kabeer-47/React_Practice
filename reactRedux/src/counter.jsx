import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/states/counter";
import { useReducer, useState } from "react";

export default function Counter() {
  // const counter = useSelector((state)=>state.counter.value);
  // const counterName = useSelector((state)=>state.counter.name)
  // const dispatch = useDispatch()
  const [value,updateValue] = useState();
  function onChange(e){
    let value = e.target.value;
    value = parseInt(value);
    updateValue(value)
  }
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state+value
      case "DECREMENT":
        // state -= 1;
        return state-value
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* <h1>{counterName}</h1> */}
        <label>Value</label>
        <input type="number" onChange ={onChange}placeholder="Enter a value"></input>
        <h2>{state}</h2>
        <div
          className="buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <button onClick={() => dispatch({
            type: "INCREMENT"
          },20)}>
            Increment
          </button>
          <button onClick={() => dispatch({
            type: "DECREMENT"
          },20)}>Decrement</button>
        </div>
      </div>
    </>
  );
}
