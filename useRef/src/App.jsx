import { useRef } from "react"

export default function App(){
  const name = useRef();
  const pass = useRef();
  function Default(event){
    event.preventDefault();
    console.log(name.current.value)
    console.log(pass.current.value)
  }
  return(
    <>

    <form onSubmit={Default}>
    
      <input className="username" ref={name} ></input>
      <input className="password" ref={pass}></input>
      <button style={{
        width: "100px",
        height: "30px"
      }} onSubmit={()=>{
        
       
      }}>Submit</button>
    </form>
    </>
  )
}