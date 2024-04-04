import React, { useRef, useState } from "react";
import "./styles.css"
import Item from "./Item";
import { createContext } from "react";
function App() {
  const inputValue = useRef("");
  
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

const taskContext = createContext(tasks);
  return (
    <taskContext.Provider>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" ref={inputValue}/>
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
    </taskContext.Provider>
  );
}

export default App;
