import React, { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css"
import { InputValue } from "./contextApi";
function App() {
  const [inputValue,updateValue] = useState({
    title: "",
    content: ""
  });
  const [tasks,updateTasks] = useState([]);


  function handleChange(event){
    let {value,name} = event.target
    updateValue(prevValue=>{
      return{
        ...prevValue,
        [name]: value
      }
    });
  }
  function addItem() {
    
    updateTasks(prevTasks => {
      const newTasks = [...prevTasks, inputValue];
      
      return newTasks;
    });
    updateValue({
      title: "",
      content: ""
    });
  }
  function deleteItem(id){
    updateTasks((prevValue)=>{
      let updatedTasks = [...prevValue]
      updatedTasks.splice(id,1);
      return updatedTasks;
    })
  }
  
 
  return (
    <div>
    <InputValue.Provider value={inputValue}>
      <Header />
      <CreateArea handleChange={handleChange} addItem={addItem} title={inputValue.title} content={inputValue.content} />
      {tasks.map((Item,index)=>{
        return(
          <Note 
          key = {index}
          title = {Item.title}
          content = {Item.content}
          deleteItem  = {deleteItem}
          />
        )
      })}
       
      <Footer />
      </InputValue.Provider>
    </div>
      
  );
  
}

export default App;

