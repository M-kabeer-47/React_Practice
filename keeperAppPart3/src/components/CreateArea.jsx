import React, { useContext } from "react";
import { InputValue } from "./contextApi";

function CreateArea(props) {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    props.addItem();
  }
  const value = useContext(InputValue);
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.handleChange} value={value.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={value.content} />
        <button onClick={handleSubmit} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
