import React from "react";
import "./styles.css"
//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?




function App() {
  let time = new Date().toLocaleTimeString();
  let [Time,useState] = React.useState(time);
  function setTime() {
    useState(new Date().toLocaleTimeString()); 
  }
  setInterval(setTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
