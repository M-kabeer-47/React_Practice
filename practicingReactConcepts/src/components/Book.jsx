import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/books";
import { useState, useEffect } from "react";
// useState

export default function Book(props) {
  const books = useSelector((state) => state.books.books);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const width = useSelector((state)=>state.width.width)
  useEffect(() => {
    // Function to update windowWidth state when the window is resized
    const handleResize = () => {
      const newWidth = window.innerWidth; // Get the new window width
      setWindowWidth(newWidth); // Update the local state
      
      console.log("Window resized. New width:", newWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to get the correct width on component mount
    // handleResize();

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  const dispatch = useDispatch();
  function handleClick() {
    dispatch(remove(props.index));
  }
  console.log(windowWidth);
  return (
    <>
      <p className="bname bookprops">{props.name}</p>
      <p className="bauthor bookprops">{props.author}</p>
      <p className="bprice bookprops">${props.price}</p>
      <div className="buttons">
        {windowWidth > 500 ? (
          <button
            className="remove"
            onClick={handleClick}
            style={{ display: "flex" }}
          >
            Remove
          </button>
        ) : (
          
          
            <MdDelete
              className=""
              style={{
                fontSize: "18px",
                color: ""
                
                
              }}
            />
          
        )}
      </div>
    </>
  );
}
