import { useSelector } from "react-redux";
import Book from "./Book";
import AddBook from "./addBook";
import { useState } from "react";
// import context from "../context/context";

export default function Books() {
  const books = useSelector((state) => state.books.books);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <div className="main Main">
        <AddBook />
        <hr style={{ marginTop: "20px" }}></hr>
        <h1 className="title2">Books</h1>
        {!books.length == 0 && <div className="main2">
          
            <h3>Name</h3>
            <h3>Author</h3>
            <h3>Price</h3>
            <h3 className="empty"></h3>
          

            {books.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
  <Book
    key={index}
    index={index}
    name={item.name}
    author={item.author}
    price={item.price}
  />
))}

        </div>}
      </div>
    </>
  );
}
