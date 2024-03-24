import React from "react";
import { useState } from "react";
import "./styles.css";

function App() {
  const [style,updateStyle] = useState("white");
  const [name,updateName] = useState("");
  const [heading,updateHeading] = useState("");
  function handleClick(){
    updateHeading(name);
  }
function Event(){ 
  updateStyle("black");
}
function Event2(){
  updateStyle("white");
}
function handleChange(event){
  updateName(event.target.value);
  
}
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange}/>
      <button style={{
        backgroundColor: style
      }

      } onMouseOver={Event} onMouseOut={Event2} onClick={handleClick} >Submit</button>
    </div>
  );
}

export default App;
