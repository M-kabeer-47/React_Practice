import React from "react";
import './styles.css';
import Card from "./card";
import { emojipedia } from "./emojipedia";
function createCard(card){
  return(
    <Card 
    key = {card.id}
    emoji = {card.emoji}
    name = {card.name}
    meaning = {card.meaning}
    />
  )
}
function App() {
  return (
    
    <div className="body">
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
      </div>
      
    
  );
}

export default App;
