import React from "react";
import "./styles.css"

function App() {
  const state = React.useState(0);
const [count,useState] = state;
console.log(useState);
// function increase(){
//   useState(count+1);
// }
// function decrease(){
//   useState(count-1);
// }
  return (
    <>
  <h1>{count}</h1>
  {/* <button onClick={decrease}>-</button>
  <button onClick={increase}>+</button> */}
  
  
  </>
  )
  
  
  
}

export default App;
