import "./index.css"
import Header from "./header.jsx"
import CreateCard from "./createCard.jsx"
import Note from "./Note.jsx"
import { useState } from "react"
import {Notes} from "./contextAPI.jsx"
export default function App(){
  const [notes,addNote] = useState({
    Notes: [],
    addItem: Add,
    deleteItem: removeNote
  });
   const [note,updateNote] =useState({
    title : "",
    content: ""});
    
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
    addNote((prevValue)=>{
      const updatedNotes = [...prevValue.Notes, note];
        return{
          Notes:updatedNotes,
          addItem: Add,
          deleteItem: removeNote
        }
    })
}
function removeNote(id){
  addNote((prevValue)=>{
    let updatedNotes = [prevValue.Notes];
    updatedNotes.splice(id,1);
    return {
      Notes: updatedNotes,
      addItem: Add,
      deleteItem: removeNote
    }
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
    removeNote = {removeNote}
     />
    </>
  )
}
  return(
    <>
    <Notes.Provider value={notes}>

    
<Header />
<CreateCard 
onChange = {onChange}
Add={Add}
/>
<div className="notes">
{notes.Notes.map((displayNotes))}
</div>
</Notes.Provider>
  </>  
  )
  
}