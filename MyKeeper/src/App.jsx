import "./index.css"
import Header from "./header.jsx"
import CreateCard from "./createCard.jsx"
import Note from "./Note.jsx"
import { notesContext } from "./context.jsx"
import { useState } from "react"
export default function App(){
 
   const [note,updateNote] =useState({
    title : "",
    content: ""});
    const [notes,updateNotes] = useState([])
    function onChange(event){
        const {name,value} = event.target;
        updateNote((prevValue)=>{
           if(name==="title"){
                return{
                    title: value,
                    content : prevValue.content
           };
        }
        else if(name ==="content"){
            return {
                title: prevValue.title,
                content:value
            };
        }
    });
}
function Add(){
    updateNotes((prevValue)=>{
      const updatedNotes = [...prevValue, note];
        updateNote({
          title: "",
          content: ""
        })
        return updatedNotes;
    })
}
function removeNote(id){
  updateNotes((prevValue)=>{
    let updatedNotes = [...prevValue];
    updatedNotes.splice(id,1);
    return updatedNotes;
      
    
  })
}
function displayNotes(note,index){
  return(
    <>
    
    <Note
    id = {index}
    key= {index}
    title = {note.title}
    content = {note.content}
    
     />
     
    </>
  )
}
  return(
    <>
    

    
<Header />
<notesContext.Provider value={{
  notes: notes,
  addNote: Add,
  removeNote: removeNote,
  note:note
}}>
<CreateCard 
onChange = {onChange}

/>
<div className="notes">
{notes.map((displayNotes))}
</div>

</notesContext.Provider>
  </>  
  )
  
}