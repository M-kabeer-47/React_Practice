import {NavLink} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
// useEffect
export default function Header(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [style,updateStyle] = useState({})
    const [toggleSearch,updateSearch] = useState({})
    function onClick(){
        updateStyle({
            right: "0%"
        })

        updateClick(!clicked)
    }
    const [clicked,updateClick] = useState(false)
   
    function handleCross(){
        updateStyle({
            right: "-100%"
        })
        updateClick(!clicked)
    }
  useEffect(() => {
    // Function to update windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log('Window resized. New width:', window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    

    // Cleanup: Remove event listener when the component unmounts
    return () => {
        console.log(windowWidth);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to ensure effect runs only once
    return(
        <div className="header">
            <h2>BooksVision</h2>
            <div className="options" style={style}>
                <div className="searchside">
                {windowWidth < 900 && clicked === true ? <p style={{color: "white",boxSizing: "border-box",textAlign: "center", marginBottom: "20px",fontSize: "20px"}}>Find a book</p> : null}
                <div className="search" >
                
                    <CiSearch className="searchIcon"/>
                <input type="text" className="search"/>
                </div>
                </div>
                
                
                
                <div className="links">
                <NavLink className="link">About Us</NavLink>
                <NavLink className="link">Contact Us</NavLink>
                </div>
                
            </div>
            {windowWidth < 900 && clicked === false ? <GiHamburgerMenu className="hamburger" onClick={onClick} /> : null}
            {windowWidth < 900 && clicked === true ? <RxCross2 className="hamburger" onClick={handleCross} /> : null}

        </div>
    )
}