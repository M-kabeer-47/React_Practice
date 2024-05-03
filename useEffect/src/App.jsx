import { useEffect, useRef, useState } from "react"

export default function  App(){
  const [numbers,updateNumber] = useState({
    number1:0,
    number2:0
  })
  const [flag,updateFlag] = useState(false)
  function changeFlag(){
    updateFlag(!flag);
  }
  function updateNumbers(e){
    const {name,value} = e.target;
    updateNumber((prevValue)=>{
      switch(name){
        case "number1":
          return {
            ...prevValue,
            number1: value
          }
          case "number2":
            return {
              ...prevValue,
              number2: value
            }
        
          
          }
 
    })
  }
  useEffect(()=>{
    console.log("CHANGED");
  },[numbers])
    
  function handleClick(){
    changeFlag()

  }
 
  return(
    <>  
    <div className="container">
    <label>Number 1</label>
    <input type="number"name="number1" onChange={updateNumbers}></input>
    <label>Number 2</label>
    <input type="number" name="number2" onChange={updateNumbers}></input>
    <button onClick={handleClick}>Submit</button>
    </div>
    <div className="subcontainer">
      <div className="group">
      <button className="buttons">+</button>
    <button className="buttons">-</button>
      </div>
   
    
</div>
   
    </>
  )
}
