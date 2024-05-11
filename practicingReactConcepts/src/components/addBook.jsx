import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/books";
export default function AddBook() {
  const [book, updateBook] = useState({});
  const books = useSelector((state)=>state.books.books);
  const dispatch = useDispatch()
  function onChange(event) {
    const { name, value } = event.target;
    updateBook((prevValue) => {
      switch (name) {
        case "name":
          return {
            ...prevValue,
            name: value,
          };
        case "author":
          return {
            ...prevValue,
            author: value,
          };
        case "price":
          return {
            ...prevValue,
            price: value,
          };
      }
    });
    
  }
  function handleClick(){
    dispatch(add(book))
    updateBook({
        name: "",
        author: "",
        price: ""
    })
  }
  return (
    <div className="addBook">
      <div className="userInputs">
        <div className="inputs name">
          <label htmlFor="">Name</label>
          <input type="text" className="bookInputs input" name ="name"  onChange={onChange} value={book.name}/>
          
        </div>

        <div className="inputs price">
          <label htmlFor="">Price</label>
          <input type="number" className="bookInputs input" name ="price"  onChange={onChange} value={book.price}/>
        </div>
        <div className="inputs author">
          <label htmlFor="">Author </label>
          <input type="text" className="bookInputs input" name ="author" onChange={onChange} value={book.author} />
        </div>
      </div>
      <button className="addButton" onClick={handleClick}>Add</button>
    </div>
  );
}
