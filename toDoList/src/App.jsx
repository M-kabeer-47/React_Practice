import React, { useState } from "react";
import "./styles.css"
import Item from "./Item";

function App() {
  const [inputValue,handleInput] = useState("");
  
const [tasks,updateTasks] = useState([])
function handleClick(){
  updateTasks((prevTasks)=>{
    return[ ...prevTasks,inputValue]
  });
  handleInput("");
  
} 
function deleteItem(id){
updateTasks((prevTasks)=>{
    let newTasks = [...prevTasks];
    newTasks.splice(id,1);
    return newTasks;
})

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
            <Item key = {index} id ={index} text = {item} DeleteTask={deleteItem}/>
          )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
