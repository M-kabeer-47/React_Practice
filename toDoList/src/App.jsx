import React, { useState } from "react";
import "./styles.css"

function App() {
  const [inputValue,handleInput] = useState("");
  
const [tasks,addTask] = useState([])
function handleClick(){
  addTask((prevTasks)=>{
    return[ ...prevTasks,inputValue]
  });
  handleInput("");
  
} 


function onChange(event){
  let value = event.target.value;
  handleInput(value);
  
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onChange} value={inputValue}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((item, index)=>{
            return(
            <li key={index}>{item}</li>
          )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
