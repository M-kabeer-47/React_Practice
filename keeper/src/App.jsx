import Footer from "./footer.jsx";
import Header from "./header.jsx";
import Note from "./note.jsx";
import notes from "./notes.js";
function createNote(notes){
    return(
        <>
        <Note 
        key = {notes.key}
        title = {notes.title}
        content = {notes.content}
        />
        </>
    )
}
export default function App(){
    return(
        <>
        <Header />
        {notes.map(createNote)}
        <Footer />
        </>
    )
}