import { useReducer, useState } from "react"
const Actions = {
  toAdd: "add"
}
export default function App(){
  function reducer(state,action){
    switch(action.type){
      case Actions.toAdd:
        return [...state, name]
    }
  }
  const [name,updateName]= useState("")
  const[state,dispatch] = useReducer(reducer,[])
  function changeName(event){
      updateName(event.target.value)
      
  }
  const [Bool,updatebool] = useState(false)
  function showName(){
    updatebool(!Bool)
  }
    function handleSubmit(e){
    e.preventDefault();
    // dispatch({type: Actions.toAdd})
    showName();
    showName(); 
    
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeName} value={name}></input>
      {Bool ? <h2>{name}</h2> : null}
    </form>

    </>
  )
}