import "./index.css"
import Header from "./header.jsx"
import CreateCard from "./createCard.jsx"
import Note from "./Note.jsx"
import { useState } from "react"
export default function App(){
  const [notes,addNote] = useState([]);
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
        return [...prevValue,note]
    })
}
function removeNote(id){
  addNote((prevValue)=>{
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
    removeNote = {removeNote}
     />
    </>
  )
}
  return(
    <>
    
<Header />
<CreateCard 
onChange = {onChange}
Add={Add}
/>
<div className="notes">
{notes.map((displayNotes))}
</div>



  </>  
  )
  
}