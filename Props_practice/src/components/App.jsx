import "./styles.css"
import Card from "./Card";
import React from "react"
import contacts from "./contacts.js";
function createCard(contact){
  return (
    <Card 
    id = {contact.id}
    key = {contact.id}
    name={contact.name}
    src = {contact.imgURL}
    email = {contact.email}
    tel = {contact.phone}
    />
  )
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
