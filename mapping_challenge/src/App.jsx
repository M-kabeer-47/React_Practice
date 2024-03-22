import React from "react";
import "./styles.css";
import emojis from "./emojipedia.js";
import Card from "./Card.jsx";
function createCard(emojis){
  return(
    <>
  <Card
  key = {emojis.id}
  emoji = {emojis.emoji}
  label = {emojis.name}
  dd = {emojis.meaning}

  />
    </>
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojis.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
