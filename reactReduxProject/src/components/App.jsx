// App.js
import React, { useState } from "react"; // Added import statement for React
import { useSelector,useDispatch} from "react-redux";
import { add, remove } from "../store/toDos";

export default function App() {
  const tasks = useSelector((state) => state.toDos.taskList);
  const [task, updateTask] = useState("");
const dispatch = useDispatch();
  function onChange(e) {
    updateTask(e.target.value);
  }

  return (
    <>
    <h1>REACT REDUX</h1>
    <div className="container">
      <input
        type="text"
        placeholder="Add an item"
        value={task}
        onChange={onChange}
        
        
      />
      <button onClick={()=>{
        dispatch(add(task))
        updateTask("");
      }}>Add</button>
      <div className="tasks">
        {tasks.map((item, index) => (
          <p key={index} onClick={()=>{
            dispatch(remove(item))
          }}>{item}</p> // Added key prop
        ))}
      </div>
    </div>
    </>
  );
}
