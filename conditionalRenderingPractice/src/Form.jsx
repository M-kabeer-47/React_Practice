import React from "react";
import Input from "./Input";
import "./styles.css"
import { userIsRegistered } from "./App";
function Login(){
  return(
    <>
    <Input 
      type = "text"
      placeHolder = "Username"
      />
      <Input 
      type = "password"
      placeHolder = "Password"
      />
      <button type="submit">Login</button>
    </>
  )
}
function Register(){
  return(

  
  <>
  <Input 
      type = "text"
      placeHolder = "Username"
      />
      <Input 
      type = "password"
      placeHolder = "Password"
      />
      <Input 
      type = "password"
      placeHolder = "Confirm Password"
      />
      <button type="submit">Register</button>
  </>
  )
}
function Form() {
  return (
    <form className="form">{
      userIsRegistered ? Login() : Register()
    }
    
    </form>
  );
}

export default Form;
