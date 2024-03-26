import React from "react";

function CreateArea(props) {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    props.addItem();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={props.content} />
        <button onClick={handleSubmit} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
