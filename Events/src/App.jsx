import React from "react";
import { useState } from "react";
import "./styles.css";

function App() {
  const[contact,setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })
  
  function handleChange(event){
    const {value:newValue,name} = event.target;
    setContact((prevValue)=>{
      if(name==="fName"){
        return{
          fName: newValue,
          lName:prevValue.lName,
          email:prevValue.email
        }
      }
      else if(name==="lName"){
        return{
          fName: prevValue.fName,
          lName: newValue,
          email:prevValue.email

        } 
      }
      else if(name==="email"){
        return{
          fName:prevValue.fName,
          lName:prevValue.lName,
          email: newValue
          

        }
        
      }
    })
  }
  
  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
      <input name="fName" type="text" placeholder="First Name" onChange={handleChange}/>
      <input name ="lName" type="text" placeholder="Last Name" onChange={handleChange} />
      <input name ="email" type="text" placeholder="Email" onChange={handleChange} />

      <button>Submit</button>
      </form>
    </div>
      
      
  );
}

export default App;
